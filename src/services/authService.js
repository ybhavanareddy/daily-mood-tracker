import Cookies from 'js-cookie'

export const loginUser = async (username, password) => {
  // simple validation (mock)
  if (username === 'Bhavana' && password === 'bhavana@123') {
    const mockToken = 'mock_jwt_token_123'
    Cookies.set('jwt_token', mockToken)
    return { jwt_token: mockToken }
  } else {
    throw new Error('Invalid username or password')
  }
}
