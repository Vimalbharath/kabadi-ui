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
getallplayers,authenticate,signup,
getallteams,getteam,addTeam,addPlayer,addMatch,
getallmatches,deleteplayer,deletematch,deleteteam,
getplayer,getmatch,updateMatch,updateimage
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
function authenticate(username, password) {
  return instance.post('/auth/authenticate', { username, password }, {
    headers: { 'Content-type': 'application/json' }
  })
}

function signup(user) {
  return instance.post('/auth/signup', user, {
    headers: { 'Content-type': 'application/json' }
  })
}

function getallplayers() {
  return instance.get('/players')
}

function getallteams() {
  return instance.get('/teams')
}
function getteam(teamid) {
  return instance.get(`/team/${teamid}`)
}
function getplayer(playerid) {
  return instance.get(`/team/${playerid}`)
}
function getmatch(matchid) {
  return instance.get(`/match/${matchid}`)
}

function getallmatches() {
  return instance.get('/matchs')
}

function addTeam(team) {
  return instance.post('/team', team, {
    headers: { 'Content-type': 'application/json' }
  })
}
function addMatch(match,team1id,team2id) {
  return instance.post(`match/${team1id}/${team2id}`, match, {
    headers: { 'Content-type': 'application/json' }
  })
}
function addPlayer(player,teamid) {
  return instance.post(`player/${teamid}`, player, {
    headers: { 'Content-type': 'application/json' }
  })
}
function updateMatch(match,matchid) {
  return instance.put(`updatematch/${matchid}`, match, {
    headers: { 'Content-type': 'application/json' }
  })
}
function updateimage(playerid) {
  return instance.put(`updateimage/${playerid}`,{
    headers: { 'Content-type': 'application/json' }
  })
}

function deleteplayer(playerid) {
  // const { playerid } = useParams();
  return instance.delete(`/deleteplayer/${playerid} `)
}
function deleteteam(teamid) {
  // const { playerid } = useParams();
  return instance.delete(`/deleteteam/${teamid} `)
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