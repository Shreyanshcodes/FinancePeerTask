
const router = require('express').Router();

router.get('/', (req, res) => {
    var username = "";
    if(req.user) username= req.user.username; 
    res.render('index', { title: "Home" , username : username})
})

router.get('/register', (req, res) => {
    var username = "";
    if(req.user) username= req.user.username; 
    res.render('registerUser', { title: "Register" , username : username})
})

router.get('/login', (req, res) => {
    
    var username = "";
    if(req.user) username= req.user.username; 
    res.render('loginUser', { title: "Login", username : username })
})


module.exports = router;