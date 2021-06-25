// Auth router for hbase demo application

const express = require('express');
const router = express.Router();

const session = require('express-session')

const cors = require('cors')
router.use(cors({
    origin: 'http://test.com',
    optionsSuccessStatus: 200
}))


router.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}))

var id = 2;

var userList = [
    {
        id:1,
        name: 'Snowsore',
        passwd:'Fuckyou-69',
        type:'admin'
    }
]

var inviteList = [

]

router.get('/login', (req, res) => {
    var name = req.query.name
    var passwd = req.query.passwd

    if(!name || !passwd) {
        res.status(401).json({
            msg: 'Wrong arguments.'
        })  
        return
    }

    var user = userList.filter(x => x.name == name && x.passwd == passwd)[0]

    if(!user) {
        res.status(401).send({
            msg: 'Oh, Mr. Sung Sing Rong'
        })
        return
    }

    req.session.userId = user.id
    res.send({
        msg: `Hello Mr/Ms. ${user.name}`
    })
})

router.post('/user', (req, res) => {
    var name = req.query.name
    var passwd = req.query.passwd

    if(!name || !passwd) {
        res.json({
            msg: 'Wrong arguments.'
        })
        return
    }

    if(userList.filter(x => x.name == name).length) {
        res.send({
            msg: 'User Already exsixt.'
        })
        return
    }

    userList.push({
        id,
        name,
        passwd,
        type: 'user'
    })

    res.send({
        msg: 'User creation compelete',
        userId: id++
    })
})

router.post('/admin', (req, res) => {
    var name = req.query.name
    var passwd = req.query.passwd

    if(!name || !passwd) {
        res.json({
            msg: 'Wrong arguments.'
        })
        return
    }

    if(userList.filter(x => x.name == name).length) {
        res.send({
            msg: 'User Already exsixt.'
        })
        return
    }

    userList.push({
        id,
        name,
        passwd,
        type: 'admin'
    })

    res.send({
        msg: 'User creation compelete',
        userId: id++
    })
})

router.use('*', (req, res, next) => {
    
    if(!req.session.userId) {
        res.json({
            msg: 'Where are you come from ?'
        })
        return
    }

    next()
})

router.get('/', (req, res) => {
    
    var id = req.session.userId

    res.json({
        id: id,
        name: userList.filter(x => x.id == id)[0].name
    })
})

router.delete('/user', (req, res) => {

    var id = req.session.userId

    userList = userList.filter(x => x.id == id)

    delete req.session.userId

    res.json({
        msg: 'You are terminated.',
        userId: id
    })
})

module.exports = router;