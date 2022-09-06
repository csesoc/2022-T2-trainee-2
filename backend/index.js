import express from 'express';
import mongoose from 'mongoose';
import User from './models/User.js';

const app = express();

const main = async () => {
    await mongoose.connect("mongodb://user:user@localhost:27017");
}
main().catch((err) => {console.log(err)});

const db = mongoose.connection;
db.on('error', err=> console.log(err));
db.once('open', () => console.log('Connected to database'));

app.use(express.json());

app.post('/register', async (req, res) => {
    const user = new User({
        image: req.body.image,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        username: req.body.username,
        password: req.body.password,
        description: req.body.description,
    })
    // const user = new User({ ...req.body });

    try {
        const newUser = await user.save();
        res.status(200).json(newUser)
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

// app.post('/login', async (req, res) => {
//     try {
//         const user = await User.findOne({Name: req.body.Name});
//         if (!user) {
//             res.status(404).json({message: 'User not found'});
//         } else {
//             const {sub, ...others} = user._doc;
//             res.status(200).json(others);
//         }
//     } catch (err) {
//         res.status(400).json({message: err.message});
//     }
// })

app.get('/sayhi', (req, res)  => {
    res.status(200).json({message: 'Hi'});
})
app.listen(8000, () => { console.log('Server is running on port 8000!') });
