import React, { useState } from 'react'
import mainAxios from '../api/mainAxios'
import ROUTES from '../api/api_routes'

const UsersList = () => {

  const [users, setUsers] = useState([])

  const listUsers = () => {
    mainAxios.get(ROUTES.GET_USERS).then(res => {
      setUsers(res.data)
    } )
  }

  const handleLogout = () => {
    console.log(ROUTES.SIGN_OUT);
    mainAxios.delete(ROUTES.SIGN_OUT, {}).then(() => window.location.reload())
  }

  return (
    <div>
      <h2>Lista de Usuários:</h2>
      <ul>{ users && users.map(user => <li key={user.id}>Id: {user.id} Email: {user.email} </li> ) }</ul>

      <button onClick={listUsers}>Listar</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UsersList;