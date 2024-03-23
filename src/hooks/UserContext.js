import React, { createContext, useContext, useState, useEffect } from "react";

import PropTypes from 'prop-types';

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({})

    const putUserData = async userinfo => {
        setUserData(userinfo)

        await localStorage.setItem('dadosLocal:userData', JSON.stringify(userinfo))

    }

    const logout = async () => {
        await localStorage.removeItem('dadosLocal:userData')
    }

    useEffect(() => {

        const loadUserData = async () => {
            const clientInfo = await localStorage.getItem('dadosLocal:userData')

            if(clientInfo){
                setUserData(JSON.parse(clientInfo))
            }
        }

        loadUserData()
        
    }, [])

    return (
        <UserContext.Provider value={{ putUserData, userData, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error('useUser must be used with userContext')
    }
    return context
}


UserProvider.propTypes = {
    children: PropTypes.node
}