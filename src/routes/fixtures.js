import { send } from 'micro'
import api from '@/api/api'

async function getFixtures (req, res) {
  const resp = await api.getFixtures()
  const data = await resp.json()
  send(res, 200, data)
}

export default {
  getFixtures
}
