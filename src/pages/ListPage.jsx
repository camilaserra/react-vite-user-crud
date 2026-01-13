import { useState } from 'react'
import { getUsers, saveUsers } from '../services/localStorageService'

export default function ListPage() {
  const [users, setUsers] = useState(getUsers())
  const [editingIndex, setEditingIndex] = useState(null)
  const [editedUser, setEditedUser] = useState({})

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index)
    setUsers(updatedUsers)
    saveUsers(updatedUsers)
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
    saveUsers(updatedUsers)
    setEditingIndex(null)
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
                  value={editedUser.name}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, name: e.target.value })
                  }
                />
                <input
                  value={editedUser.cpf}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, cpf: e.target.value })
                  }
                />
                <input
                  value={editedUser.phone}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, phone: e.target.value })
                  }
                />
                <input
                  value={editedUser.email}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, email: e.target.value })
                  }
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
