import logging
import os
import sys
import threading
from subprocess import check_call, Popen

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


def main():
    logging.basicConfig(level=logging.INFO,format='%(asctime)s %(message)s',
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
