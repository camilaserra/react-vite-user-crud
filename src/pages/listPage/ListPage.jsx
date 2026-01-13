import { useState } from 'react'
import { getUsers, saveUsers } from '../../services/localStorageService'
import { cpfMask, phoneMask } from '../../utils/inputMasks'

const formatUser = (user) => ({
  ...user,
  cpf: cpfMask(user.cpf),
  phone: phoneMask(user.phone)
})

const cleanNumber = (value = '') => value.replace(/\D/g, '')

export default function ListPage() {
  const [users, setUsers] = useState(() =>
    getUsers().map(formatUser)
  )

  const [editingIndex, setEditingIndex] = useState(null)
  const [editedUser, setEditedUser] = useState({})

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index)

    setUsers(updatedUsers)
    saveUsers(
      updatedUsers.map((u) => ({
        ...u,
        cpf: cleanNumber(u.cpf),
        phone: cleanNumber(u.phone)
      }))
    )
  }

  const handleEdit = (index) => {
    setEditingIndex(index)
    setEditedUser(users[index])
  }

  const handleSave = () => {
    const updatedUsers = users.map((user, index) =>
      index === editingIndex ? editedUser : user
    )

    setUsers(updatedUsers)

    saveUsers(
      updatedUsers.map((u) => ({
        ...u,
        cpf: cleanNumber(u.cpf),
        phone: cleanNumber(u.phone)
      }))
    )

    setEditingIndex(null)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    let formattedValue = value

    if (name === 'cpf') {
      formattedValue = cpfMask(value)
    }

    if (name === 'phone') {
      formattedValue = phoneMask(value)
    }

    setEditedUser((prev) => ({
      ...prev,
      [name]: formattedValue
    }))
  }

  return (
    <div>
      <h2>Lista de usuários cadastrados</h2>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <>
                <input
                  name="name"
                  value={editedUser.name || ''}
                  onChange={handleChange}
                />

                <input
                  name="cpf"
                  value={editedUser.cpf || ''}
                  onChange={handleChange}
                  maxLength={14}
                />

                <input
                  name="phone"
                  value={editedUser.phone || ''}
                  onChange={handleChange}
                  maxLength={15}
                />

                <input
                  name="email"
                  value={editedUser.email || ''}
                  onChange={handleChange}
                />

                <button onClick={handleSave}>Salvar</button>
              </>
            ) : (
              <>
                {user.name} - {user.cpf} - {user.phone} - {user.email}

                <button onClick={() => handleEdit(index)}>Editar</button>
                <button onClick={() => handleDelete(index)}>Excluir</button>
              </>
            )}
          </li>
        ))}
      </ul>

      <button onClick={() => window.history.back()}>Voltar</button>
    </div>
  )
}
