import { api } from 'services/api'

export const getProducts = async (id) => {
  try {
    const { data } = await api.get(id)
    return data
  } catch (err) {
    return err
  }
}
