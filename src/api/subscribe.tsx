import axiosClient from './apiClient'

const addSubscribe = async (data: any): Promise<any> => {
  const response = await axiosClient.post('/subscribe', JSON.stringify(data))
  return response
}

export default addSubscribe
