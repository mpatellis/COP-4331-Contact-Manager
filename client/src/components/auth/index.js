import {isEmail} from 'validator'
import axios from 'axios'
import JWT from 'jwt-client'

var token = JWT.get()
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

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
    searchContacts()
    return Res
}

var usernameFree = async (username) => {
    var Res 
    await axios.get(`user/username/${username}`)
        .then(res => {
            if (res.data.exists) {
                Res = res.data.exists
            } else Res = false
        })
        .catch(err => console.log)
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
    return Res
}



var getUserInfo = async() => {
    var Res
    await axios.get('/user')
        .then( res => {
            console.log(res.data)
            Res = res.data
        })
        .catch()
    return Res
}

var updateUserInfo = async (user) => {
    var Res ={Error: {}}
    if (user.username)
        await usernameFree(user.username)
            .then(async res => {
                if (res) {
                    Res.Error = 'Username already taken'
                    user.username = undefined
                    await axios.put('/user', user)
                        .then( res => {
                            console.log(res.data)
                            Res.data = res.data
                        })
                        .catch()
                } else {
                    await axios.put('/user', user)
                        .then( res => {
                            console.log(res.data)
                            Res.data = res.data
                        })
                        .catch()
                }
            }).catch()    
    return Res
}

var deleteUser = async () => {
    var Res
    await axios.delete('/user')
        .then(res => {
            console.log(res.data)
            Res = res.data
        })
        .catch()
    return Res
}
// returns true if user is verified
var isVerified = async (user) => {
    var Res
    await axios.get('/user/isverified', user)
        .then( res => {
            console.log(res.data.isVerified)
            if (res.data.isVerified)
                return res.data.isVerified
            Res = false
        })
        .catch()
    return Res
}

var sendVerificationEmail = async () => {
    var Res
    await axios.get('/user/verify')
        .then( res => {
            console.log(res.data)
            Res = res.data
        })
        .catch()
}

// returns true if correct code
var verifyUser = async (code) => {
    var Res
    await axios.put('/user/verify',{code: code})
        .then( res => {
            console.log(!!res.data.n)
            Res = !!res.data.n
        })
        .catch()
    return Res
}



var addContact = async (contact) => {
    var Res
    await axios.post('/contacts', contact)
        .then(res => {
            console.log(res.data)
            Res = res.data
        })
        .catch()
    return Res
}

var getAllContacts = async () => {
    var Res
    await axios.get('/contacts')
        .then(res => {
            console.log(res.data)
            Res = res.data
        })
        .catch()
    return Res
}

var searchContacts = async (search) => {
    var Res
    await axios.post('/contacts/search', {search: search})
        .then(res => {
            console.log(res.data)
            Res = res.data
        })
        .catch(err => console.log)
        return Res
}

var getContactById = async (id) => {
    var Res
    await axios.get(`/contacts/id/${id}`,)
        .then(res => {
            console.log(res.data)
            Res = res.data
        })
        .catch(err => console.log)
    return Res
}

var updateContactById = async (id, body) => {
    var Res
    await axios.put(`/contacts/id/${id}`, body)
        .then(res => {
            console.log(res.data)
            Res = res.data
        })
        .catch(err => console.log)
    return Res
}

var deleteContactById = async (id) => {
    var Res
    await axios.delete(`/contacts/id/${id}`)
        .then(res => {
            console.log(res.data)
            Res = res.data
        })
        .catch(err => console.log)
    return Res
}

export { Login, Register, getUserInfo, updateUserInfo, deleteUser,
    isVerified, sendVerificationEmail, verifyUser, addContact,
    getAllContacts, searchContacts, getContactById, updateContactById,
    deleteContactById }