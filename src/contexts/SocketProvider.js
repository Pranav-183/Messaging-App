import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'

const SocketContext = React.createContext()

const useSocket = () => {
   return useContext(SocketContext)
}

const SocketProvider = ({ id, children }) => {
   const [socket, setSocket] = useState()

   useEffect(() => {
      const newSocket = io('http://localhost:5000', { query: { id } })
      setSocket(newSocket)

      return () => newSocket.close()
   }, [id])
   
   return (
      <SocketContext.Provider value={socket}>
         { children }
      </SocketContext.Provider>
   )
}
 
export { SocketProvider, useSocket }