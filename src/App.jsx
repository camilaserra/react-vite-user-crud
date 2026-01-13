import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { fetchUsers } from './services/usersApi'
import { getUsers, saveUsers } from './services/localStorageService'
import FormPage from './pages/FormPage'
import ListPage from './pages/ListPage'

function App() {
  useEffect(() => {
    const initUsers = async () => {
      const storedUsers = getUsers()

      if (storedUsers.length === 0) {
        try {
          const apiUsers = await fetchUsers()
          saveUsers(apiUsers)
        } catch (error) {
          console.error(error)
        }
      }
    }

    initUsers()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App