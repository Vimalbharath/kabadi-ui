import axios from 'axios'
import { config } from '../Constants'
// import { useParams, Link } from 'react-router-dom'
export const api = {
  
//   authenticate,
//   signup,
//   numberOfUsers,
//   numberOfBooks,
//   getUsers,
//   deleteUser,
//   getBooks,
//   deleteBook,
//   addBook
getallplayers,
getallteams,getteam,
getallmatches,deleteplayer,deletematch
}


// function authenticate(username, password) {
//   return instance.post('/auth/authenticate', { username, password }, {
//     headers: { 'Content-type': 'application/json' }
//   })
// }

// function signup(user) {
//   return instance.post('/auth/signup', user, {
//     headers: { 'Content-type': 'application/json' }
//   })
// }

function getallplayers() {
  return instance.get('/players')
}

function getallteams() {
  return instance.get('/teams')
}
function getteam(teamid) {
  return instance.get(`/team/${teamid}`)
}
function getallmatches() {
  return instance.get('/matchs')
}
function deleteplayer(playerid) {
  // const { playerid } = useParams();
  return instance.delete(`/deleteplayer/${playerid} `)
}
function deletematch(matchid) {
  // const { playerid } = useParams();
  return instance.delete(`/deletematch/${matchid} `)
}

// function getUsers(user, username) {
//   const url = username ? `/api/users/${username}` : '/api/users'
//   return instance.get(url, {
//     headers: { 'Authorization': basicAuth(user) }
//   })
// }

// function deleteUser(user, username) {
//   return instance.delete(`/api/users/${username}`, {
//     headers: { 'Authorization': basicAuth(user) }
//   })
// }

// function getBooks(user, text) {
//   const url = text ? `/api/books?text=${text}` : '/api/books'
//   return instance.get(url, {
//     headers: { 'Authorization': basicAuth(user) }
//   })
// }

// function deleteBook(user, isbn) {
//   return instance.delete(`/api/books/${isbn}`, {
//     headers: { 'Authorization': basicAuth(user) }
//   })
// }

// function addBook(user, book) {
//   return instance.post('/api/books', book, {
//     headers: {
//       'Content-type': 'application/json',
//       'Authorization': basicAuth(user)
//     }
//   })
// }

// -- Axios

const instance = axios.create({
  baseURL: config.url.API_BASE_URL
})

// -- Helper functions

// function basicAuth(user) {
//   return `Basic ${user.authdata}`
// }