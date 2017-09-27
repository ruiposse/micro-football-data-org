import { send } from 'micro'
import api from '@/api/api'

async function getCompetitions (req, res) {
  console.log('getCompetitions')
  const resp = await api.getCompetitions()
  const data = await resp.json()
  send(res, 200, data)
}

function getTeamsInCompetition (competitionId) {
  // return fetch(`${config.baseUrl}/`)
}

export default {
  getCompetitions,
  getTeamsInCompetition
}
