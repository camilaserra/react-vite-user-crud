import { getUsers } from '../services/localStorageService'

export default function ListPage() {
  const users = getUsers()

  return (

    <div>
        <ul>
            {users.map((user, index) => (
                <li key={index}>
                {user.name} - {user.cpf} - {user.phone} - {user.email}
                </li>
            ))}
        </ul>

        <button onClick={() => window.history.back()}>Voltar</button>
    </div>
  )
}
