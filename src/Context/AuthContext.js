import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

function AuthProvider({ children }) {
  let defaultuser={
   
id: 0,
name: "public",
role: "PUBLIC"
  }
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'))
    setUser(storedUser)
  }, [])

  const getUser = () => {
    return JSON.parse(localStorage.getItem('user'))
  }

  const userIsAuthenticated = () => {
    return localStorage.getItem('user') !== null
  }

  const userLogin = user => {
    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }

  const userLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  
 
    const isAdmin = user?.role === 'ADMIN'
    const adminStyle = () => {
    return isAdmin ? { "display": "block" } : { "display": "none" }
  }
  const contextValue = {
    user,
    getUser,
    userIsAuthenticated,
    userLogin,
    userLogout,
    adminStyle
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext

export function useAuth() {
  return useContext(AuthContext)
}

export { AuthProvider }