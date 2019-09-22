import {isEmail} from 'validator'
import axios from 'axios'
import JWT from 'jwt-client'

axios.defaults.headers.common['Authorization'] = JWT.get();

var getUserId = () => {
    return JWT.remember().claim._id
}
// axios
//         //.get('/user/allusers')
//         .post("/user/login", user)
//         .then(res => {console.log(res)})
//         .catch(err => {
//           console.log(err.message)
//         })

var Login = async(username,password) => {
    var Res = {Error: {}}
    if (!username) {
        Res.Error.username = 'Please enter your username'
    } else {
        await axios.get(`user/username/${username}`)
        .then(async res => {
            if (!res.data.exists) {
                Res.Error.username = 'Username does not exist'
            } else if (!password) {
                Res.Error.password = 'Please enter your password'
            } else {
                // login
                var user = {username: username, password: password}
                await axios.post('user/login', user)
                .then(res => {
                    if (res.data.token) if (JWT.validate(res.data.token)) {
                        JWT.keep(res.data.token);
                      } else {
                        JWT.forget();
                      };
                })
                .catch(err => {
                    Res.Error.password = 'Incorect Password'
                    return Res
                })
            }
            return Res
            })
        .catch(err => {
            console.log(';(')
            console.error(err)
        })
    } 
    console.log('end')
    console.log(Res.Error)
    console.log('===')
    return Res
}

var Register = async(username, email, password) => {
    var Res = {Error: {}}
    if (!username) {
        Res.Error.username = 'Please enter your username'
    } else {
        await axios.get(`user/username/${username}`)
        .then(async res => {
            if (res.data.exists) {
                Res.Error.username = 'Username is taken'
            } else if (!email || !isEmail(email)) {
                Res.Error.email = 'Please enter a valid email'
            } else if (!password) {
                Res.Error.password = 'Please enter a password'
            } else {
                // register
                var user = {username: username, email: email, password: password}
                await axios.post('user/register', user)
                .then(res => {
                    console.log('succcess')
                })
                .catch(err => {
                    Res.Error.password = 'Incorect Password'
                    return Res
                })
            }
            return Res
            })
        .catch(err => {
            console.log(';(')
            console.error(err)
        })
    } 
    console.log('end')
    console.log(Res.Error)
    console.log('===')
    return Res
}



var getUserInfo = async() => {
    var Res = {Error: {}, user: {}}
    var _id = getUserId()
    console.log(_id)
    await axios.get('/user')
        .then( res => {
            return res
        })

}


export { Login, Register, getUserInfo };