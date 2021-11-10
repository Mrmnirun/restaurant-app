import React, { useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true)
    const [token, setToken] = useState()
    const [currentUser, setCurrentUser] = useState({})
    
    useEffect(()=>{
        AsyncStorage.getItem('user').then(res=>{
            const data = JSON.parse(res||'{}')
            setCurrentUser(data)
            setToken(data? data.token:false)
            setLoading(false)
        })
    }, [])

    useEffect(()=>{console.log(currentUser)}, [currentUser])

    function updateCurrentUser(user) {
        setCurrentUser(user)
    }

    function logout() {
        return AsyncStorage.setItem('user', '')
        .then(data=>{
            setCurrentUser('');
            setToken(null)
            return data
        })
    }

    function saveToken(token) {
        setToken(token)
    }

    function getToken() {
        return token
    }

    function login (user, token) {
        return AsyncStorage.setItem('user', JSON.stringify({...user, token}))
        .then(data=>{
            setCurrentUser(user)
            setToken(token)
            return data
        })
    }

    function secureFetch(url, { method = 'GET', headers = {} }) {
        return fetch(process.env.REACT_APP_API_HOST + url, {
            method,
            headers: { "Client": process.env.REACT_APP_CLIENT_ID, "Authorization": "Bearer " + token, ...headers },
        })
    }

    const value = {
        currentUser,
        updateCurrentUser,
        saveToken,
        logout,
        token,
        getToken,
        secureFetch,
        login
    }

    return (
        <AuthContext.Provider value={value} >
            {!loading && children}
        </AuthContext.Provider>
    )
}