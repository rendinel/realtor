import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '6b4e94a2f2msh78e73b7c4e8f211p1d469ajsn07ae5ad90a65',
    },
  })
  return data
}
