export const authenticateUser = (
  username: string,
  password: string
): boolean => {
  // autenticação fictícia
  return username === 'admin' && password === 'admin'
}
