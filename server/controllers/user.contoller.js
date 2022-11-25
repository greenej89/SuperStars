require('dotenv').config()
const {User} = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const findAll = (req, res) => {
    User.find()
    .then((allUsers) => res.json(allUsers))
    .catch((err) => res.status(400).json(err))
}

const register = (req, res) => {
    User.create(req.body)
        .then(user => {
            const userToken = jwt.sign({ 
                id: user._id}, process.env.SECRET_KEY)
            
            res
                .cookie('usertoken', userToken, { httpOnly: true})
                .json({ msg: 'successfully created a user', user: user})
        })
        .catch(err => res.status(400).json(err))
}

const login = async(req, res) => {
    const user = await User.findOne({ email: req.body.email })
    //Check users collection for email
    if(user === null){
        return res.status(400)
    }
    //Compare the password input to the correct password
    const correctPassword = await bcrypt.compare(req.body.password, user.password)
    if(!correctPassword) {
        return res.status(400).json({message: 'Incorrect password'})
    }

    //Create json web token
    const userToken = jwt.sign({
        id: user._id
    }, process.env.SECRET_KEY)

    //Send web token back as a cookie
    res
        .cookie('usertoken', userToken, { httpOnly: true })
        .json({ msg: 'succesfully logged in a user'})
}

const logout = (req, res) => {
    res.clearCookie('usertoken')
    res.status(200).json({success: 'user logged out'})
}

module.exports = {findAll, register, login, logout}