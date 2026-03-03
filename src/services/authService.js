import Cookies from 'js-cookie'

export const loginUser = async (username, password) => {
  if (username.trim() !== '' && password.trim() !== '') {
    const mockToken = 'mock_jwt_token_123'

    Cookies.set('jwt_token', mockToken)
    Cookies.set('username', username) // optional

    return { jwt_token: mockToken }
  } else {
    throw new Error('Please enter username and password')
  }
}