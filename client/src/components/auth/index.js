import {isEmail} from 'validator'
import axios from 'axios'



// axios
//         //.get('/user/allusers')
//         .post("/user/login", user)
//         .then(res => {console.log(res)})
//         .catch(err => {
//           console.log(err.message)
//         })

var Login = (username,password) => {
    var Error = {}
    if (!username) {
        Error.username = 'Please enter your username'
    } else {
        axios.get(`user/username/${username}`)
        .then(res => {
            if (!res.data.exists) {
                Error.username = 'Username does not exist'
            } else if (!password) {
                Error.password = 'Please enter your password'
            } else {
                // login
                var user = {username: username, password: password}
                axios.post('user/login', user)
                .then(res => {
                    if (res.data.token) console.log(res.data.token)
                })
            }
            })
        .catch(err => {
            console.log(err.message)
        })
    } 
    console.log(Error)
    return Error
}

var Register = (username, email, password) => {
    var Error = {}
    if (!username || username.length < 3) {
        Error.username = `Please enter a username (3 or more chars)}`
    } else {
        // check if username exists
        if (!email || !isEmail(email)) {
            Error.email = 'please enter a valid'
        } else if (!password) {
            Error.password = 'Please enter your password'
        } else {
            // login
        }
    }
    return Error
}

export { Login, Register };