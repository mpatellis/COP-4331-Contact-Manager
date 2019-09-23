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
    await axios.get('/user')
        .then( res => {
            console.log(res.data)
            return res.data
        })
        .catch()
}

var updateUserInfo = async (user) => {
    await axios.put('/user', user)
        .then( res => {
            console.log(res.data)
            return res.data
        })
        .catch()
}

var deleteUser = async () => {
    await axios.delete('/user')
        .then(res => {
            console.log(res.data)
            return res.data
        })
        .catch()
}
// returns true if user is verified
var isVerified = async (user) => {
    await axios.get('/user/isverified', user)
        .then( res => {
            console.log(res.data.isVerified)
            if (res.data.isVerified)
                return res.data.isVerified
            return false
        })
        .catch()
}

var sendVerificationEmail = async () => {
    await axios.get('/user/verify')
        .then( res => {
            console.log(res.data)
            return res.data
        })
        .catch()
}

// returns true if correct code
var verifyUser = async (code) => {
    await axios.put('/user/verify',{code: code})
        .then( res => {
            console.log(!!res.data.n)
            return !!res.data.n
        })
        .catch()
}



var addContact = async (contact) => {
    await axios.post('/contacts', contact)
        .then(res => {
            console.log(res.data)
            return res.data
        })
        .catch()
}

var getAllContacts = async () => {
    await axios.get('/contacts')
        .then(res => {
            console.log(res.data)
            return res.data
        })
        .catch()
}

var searchContacts = async (search) => {
    await axios.post('/contacts/search', {search: search})
        .then(res => {
            console.log(res.data)
            return res.data
        })
        .catch(err => console.log)
}

var getContactById = async (id) => {
    await axios.get(`/contacts/id/${id}`,)
        .then(res => {
            console.log(res.data)
            return res.data
        })
        .catch(err => console.log)
}

var updateContactById = async (id, body) => {
    await axios.put(`/contacts/id/${id}`, body)
        .then(res => {
            console.log(res.data)
            return res.data
        })
        .catch(err => console.log)
}

var deleteContactById = async (id) => {
    await axios.delete(`/contacts/id/${id}`)
        .then(res => {
            console.log(res.data)
            return res.data
        })
        .catch(err => console.log)
}

export { Login, Register, getUserInfo, updateUserInfo, deleteUser,
    isVerified, sendVerificationEmail, verifyUser, addContact,
    getAllContacts, searchContacts, getContactById, updateContactById,
    deleteContactById }