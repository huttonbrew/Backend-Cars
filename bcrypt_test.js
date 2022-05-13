// example post request using bcrypt
app.post('/createuser', async function (req, res) {
    
    let hash = await bcrypt.hash(req.body.password, 12)
    
    await userInfo.create({
        firstName: req.body.firstName,
        lastName: req.body.firstName,
        country: req.body.firstName,
        city: req.body.firstName,
        email: req.body.email,
        username: req.body.username,
        password: hash
    })
    .then((results)=> {
        res.send(results)
    })
    .catch((err) => {
        res.send(err)
    })
});

// example login using bcrypt
app.get('/userlogin', async function (req, res) {
    email = req.body.email
    pass = req.body.password

    let user = await userInfo.findOne({
        where: {
            email: email
        }
    })

    if (user == null) {
        res.send('email not registered')
    } else {
        let isValid = await bcrypt.compare(password, user.password)
        if(isValid == true) {
            res.send('login successful!')
        } else {
            res.send('invalid credentials')
        }
    }
});
