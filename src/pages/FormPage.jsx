import { useState } from 'react'
import { getUsers, saveUsers } from '../services/localStorageService'
import { useNavigate } from 'react-router-dom'

export default function FormPage() {
  const [form, setForm] = useState({
    name: '',
    cpf: '',
    phone: '',
    email: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const users = getUsers()
    const newUser = { ...form, id: Date.now() }

    saveUsers([...users, newUser])
    navigate('/list')
  }

  return (
    <div>
      <h1>Cadastro de usuários</h1>
      <p>Preencha os campos abaixo para cadastrar um novo usuário.</p>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Nome completo"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="cpf"
          placeholder="CPF"
          value={form.cpf}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Telefone"
          value={form.phone}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <button type="submit">Adicionar</button>
      </form>

      <button onClick={() => navigate('/list')}>
        Lista de usuários cadastrados
      </button>
    </div>
  )
}
