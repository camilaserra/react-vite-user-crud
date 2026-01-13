export const fetchUsers = async () => {
  const response = await fetch(
    'https://private-9d65b3-tinnova.apiary-mock.com/users'
  )

  if (!response.ok) {
    throw new Error('Erro ao buscar usuários')
  }

  return response.json()
}
