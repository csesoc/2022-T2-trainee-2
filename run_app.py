import logging
import os
import sys
import threading
import requests
import time
import argparse
from subprocess import check_call, Popen

parser = argparse.ArgumentParser()
parser.add_argument(
    "-u", "--users", help="Number of users to generate into the database")
args = parser.parse_args()

apiUrl = 'https://randomuser.me/api/'
backEndUrl = 'http://localhost:8000/register'
fakeUsers = int(args.users)


class LogPipe(threading.Thread):
    """ boilerplate abstraction for redirecting the logs of a process """

    def __init__(self, level):
        """Setup the object with a logger and a loglevel
        and start the thread
        """
        threading.Thread.__init__(self)
        self.daemon = False
        self.level = level
        self.fdRead, self.fdWrite = os.pipe()
        self.pipeReader = os.fdopen(self.fdRead)
        self.start()

    def fileno(self):
        """Return the write file descriptor of the pipe"""
        return self.fdWrite

    def run(self):
        """Run the thread, logging everything."""
        for line in iter(self.pipeReader.readline, ''):
            logging.log(self.level, line.strip('\n'))

        self.pipeReader.close()

    def close(self):
        """Close the write end of the pipe."""
        os.close(self.fdWrite)

    def write(self, message):
        """ do write """
        logging.log(self.level, message)


def createUsers():
    print(f'Creating {fakeUsers} users...')
    for i in range(fakeUsers):
        user = requests.get(apiUrl).json()['results'][0]

        userData = {
            'image': user['picture']['medium'],
            'firstName': user['name']['first'],
            'lastName': user['name']['last'],
            'age': user['dob']['age'],
            'username': user['login']['username'],
            'password': user['login']['password'],
            'description': user['email'],
        }

        r = requests.post(backEndUrl, json=userData)

        if r.status_code != 200:
            exit(1)


def main():
    logging.basicConfig(level=logging.INFO, format='%(asctime)s %(message)s',
                        handlers=[
                            logging.FileHandler("debug.log", mode='w'),
                            logging.StreamHandler()
                        ]
                        )
    sys.stdout = LogPipe(logging.INFO)
    sys.stderr = LogPipe(logging.ERROR)
    try:
        Popen(
            'npm run database',
            shell=True,
            stdout=None,
        )
        Popen(
            'npm run backend',
            shell=True,
        )

        time.sleep(1)
        createUsers()

        check_call(
            'npm run frontend',
            shell=True,
        )

    except Exception as e:
        sys.stdout.write(f'exception - {e}')
    finally:
        sys.stdout.close()
        sys.stderr.close()
        sys.stdout = sys.__stdout__
        sys.stderr = sys.__stderr__
        logging.shutdown()


if __name__ == '__main__':
    main()
