import { send } from 'micro'
import api from '@/api/api'

async function getTeam (req, res) {
  const resp = await api.getTeam(req.params.teamId)
  const data = await resp.json()
  send(res, 200, data)
}

async function getTeamFixtures (req, res) {
  const resp = await api.getTeamFixtures(req.params.teamId)
  const data = await resp.json()
  send(res, 200, data)
}

async function getTeamPlayers (req, res) {
  const resp = await api.getTeamPlayers(req.params.teamId)
  const data = await resp.json()
  send(res, 200, data)
}

export default {
  getTeam,
  getTeamFixtures,
  getTeamPlayers
}
