import { useState } from 'react'
import { getUsers, saveUsers } from '../../services/localStorageService'
import styles from './list.module.css'
import { cpfMask, phoneMask } from '../../utils/inputMasks'
import Header from '../../components/header'
import EmptyState from '../../components/EmptyState/EmptyState'

const formatUser = (user) => ({
  ...user,
  cpf: cpfMask(user.cpf),
  phone: phoneMask(user.phone)
})

const cleanNumber = (value = '') => value.replace(/\D/g, '')

export default function ListPage() {
  const [loading, setLoading] = useState(false)
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
    if (name === 'cpf') formattedValue = cpfMask(value)
    if (name === 'phone') formattedValue = phoneMask(value)

    setEditedUser((prev) => ({
      ...prev,
      [name]: formattedValue
    }))
  }

  return (
    <>
      <Header
        buttonText="Voltar para o formulário"
        buttonRoute="/"
      />

      <div className={styles.page}>
        {users.length === 0 ? (
          <EmptyState
            title="Nenhum usuário cadastrado"
            description="Cadastre um usuário para que ele apareça nesta lista."
          />
        ) : (

          <div>
            <h2 className={styles.title}>Lista de usuários cadastrados</h2>
            <ul className={styles.list}>
              {users.map((user, index) => (
                <li key={index} className={styles.item}>
                  {editingIndex === index ? (
                    <>
                      <div className={styles.row}>
                        <input
                          className={styles.input}
                          name="name"
                          value={editedUser.name || ''}
                          onChange={handleChange}
                        />

                        <input
                          className={styles.input}
                          name="cpf"
                          value={editedUser.cpf || ''}
                          onChange={handleChange}
                          maxLength={14}
                        />

                        <input
                          className={styles.input}
                          name="phone"
                          value={editedUser.phone || ''}
                          onChange={handleChange}
                          maxLength={15}
                        />

                        <input
                          className={styles.input}
                          name="email"
                          value={editedUser.email || ''}
                          onChange={handleChange}
                        />
                      </div>

                      <div className={styles.actions}>
                        <button
                          className={`${styles.button} ${styles.save}`}
                          onClick={handleSave}
                        >
                          Salvar
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={styles.row}>
                        <div className={styles.info}>
                          <span className={styles.name}>{user.name}</span>

                          <span className={styles.details}>
                            CPF: {user.cpf}
                          </span>

                          <span className={styles.details}>
                            Telefone: {user.phone}
                          </span>

                          <span className={styles.details}>
                            Email: {user.email}
                          </span>
                        </div>

                        <div className={styles.actions}>
                          <button
                            className={`${styles.button} ${styles.edit}`}
                            onClick={() => handleEdit(index)}
                          >
                            Editar
                          </button>

                          <button
                            className={`${styles.button} ${styles.delete}`}
                            onClick={() => handleDelete(index)}
                          >
                            Excluir
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  )
}
