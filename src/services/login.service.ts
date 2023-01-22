import { setToken } from "../store/user"

export const login = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ token: 'bearer' })
    localStorage.setItem('token', 'bearer' )
  }, 300)
})


export const logout = () => {
  localStorage.clear()
}