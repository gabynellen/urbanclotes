import { createContext, useState } from "react";

const Notification = ({ message, severity }) => {
    
    const NotificationStyle = {
        position: 'absolute',
        top: 100,
        right: 10,
        padding: '10px 20px',
        color: 'white',
        backgroundColor: severity === 'success' ? 'green' : 'red'
    }

    if (message === '') return

    return (
        <div style={NotificationStyle}>
            {message}
        </div>
    )
}

export const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {

    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')

    const setNotification = (msj, sev, time = 3) =>{
        setMessage(msj)
        setSeverity(sev)
        setTimeout(() => {
            setMessage('')
        }, time * 1000);
    }

    return (
        <NotificationContext.Provider value={{setNotification}}>
            <Notification message={message} severity={severity} />
            {children}
        </NotificationContext.Provider>
    )

}

