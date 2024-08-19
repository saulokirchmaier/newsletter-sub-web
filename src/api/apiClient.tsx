import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

const axiosClient = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

axiosClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const { statusCode, message } = error.response.data
    const defaultError = {
      error: true,
      messages: ['Favor repita a operação'],
    }

    if (statusCode === 422)
      defaultError.messages = Object.values(message[0])[0] as string[]

    return defaultError
  }
)

export default axiosClient
