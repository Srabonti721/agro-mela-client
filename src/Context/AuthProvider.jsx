import React, { createContext } from 'react'

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const email = "toma@gmail.com"

    const userInfo={
        email
    }
  return <AuthContext value={userInfo}>{children}</AuthContext>
}

export default AuthProvider
