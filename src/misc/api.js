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
getplayer,getmatch,updateMatch,updateimage,
numberOfUsers,getUsers,deleteUser
}


function numberOfUsers() {
  return instance.get('/public/numberOfUsers')
}



function getUsers(user, username) {
  const url = username ? `/api/users/${username}` : '/api/users'
  return instance.get(url, {
    headers: { 'Authorization': basicAuth(user) }
  })
}


function deleteUser(user, username) {
  return instance.delete(`/api/users/${username}`, {
    headers: { 'Authorization': basicAuth(user) }
  })
}
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

function getallplayers(user) {
  return instance.get('/admin/players', {
    headers: { 'Authorization': basicAuth(user) }
  })
}

function getallteams(user) {
  return instance.get('/admin/teams', {
    headers: { 'Authorization': basicAuth(user) }
  })
}
function getteam(teamid,user) {
  return instance.get(`/admin/team/${teamid}`, {
    headers: { 'Authorization': basicAuth(user) }
  })
}
function getplayer(playerid,user) {
  return instance.get(`/admin/team/${playerid}`, {
    headers: { 'Authorization': basicAuth(user) }
  })
}
function getmatch(matchid,user) {
  return instance.get(`/admin/match/${matchid}`, {
    headers: { 'Authorization': basicAuth(user) }
  })
}

function getallmatches(user) {
  return instance.get('admin/matchs', {
    headers: { 'Authorization': basicAuth(user) }
  })
}

function addTeam(team,user) {
  return instance.post('/admin/team', team, {
    headers: { 'Content-type': 'application/json' ,'Authorization': basicAuth(user)}
  })
}
function addMatch(match,team1id,team2id,user) {
  return instance.post(`/admin/match/${team1id}/${team2id}`, match, {
    headers: { 'Content-type': 'application/json' ,'Authorization': basicAuth(user)}
  })
}
function addPlayer(player,teamid,user) {
  return instance.post(`/admin/player/${teamid}`, player, {
    headers: { 'Content-type': 'application/json','Authorization': basicAuth(user) }
  })
}
function updateMatch(match,matchid,user) {
  return instance.put(`/admin/updatematch/${matchid}`, match, {
    headers: { 'Content-type': 'application/json' ,'Authorization': basicAuth(user)}
  })
}
function updateimage(playerid,user) {
  return instance.put(`/admin/updateimage/${playerid}`,user,{
    headers: { 'Content-type': 'application/json','Authorization': basicAuth(user) }
  })
}

function deleteplayer(playerid,user) {
  // const { playerid } = useParams();
  return instance.delete(`/admin/deleteplayer/${playerid} `, {
    headers: { 'Authorization': basicAuth(user) }
  })
}
function deleteteam(teamid,user) {
  // const { playerid } = useParams();
  return instance.delete(`/admin/deleteteam/${teamid} `, {
    headers: { 'Authorization': basicAuth(user) }
  })
}
function deletematch(matchid,user) {
  // const { playerid } = useParams();
  return instance.delete(`/admin/deletematch/${matchid} `, {
    headers: { 'Authorization': basicAuth(user) }
  })
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

//-- Helper functions

function basicAuth(user) {
  return `Basic ${user.authdata}`
}