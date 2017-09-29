import { send } from 'micro'
import api from '@/api/api'

async function getCompetitions (req, res) {
  const resp = await api.getCompetitions()
  const data = await resp.json()
  send(res, 200, data)
}

async function getCompetition (req, res) {
  const resp = await api.getCompetition(req.params.competitionId)
  const data = await resp.json()
  send(res, 200, data)
}

async function getCompetitionTeams (req, res) {
  const resp = await api.getCompetitionTeams(req.params.competitionId)
  const data = await resp.json()
  send(res, 200, data)
}

async function getCompetitionFixtures (req, res) {
  const resp = await api.getCompetitionFixtures(req.params.competitionId)
  const data = await resp.json()
  send(res, 200, data)
}

async function getLeagueTable (req, res) {
  const resp = await api.getLeagueTable(req.params.competitionId)
  const data = await resp.json()
  send(res, 200, data)
}

export default {
  getCompetitions,
  getCompetition,
  getCompetitionTeams,
  getCompetitionFixtures,
  getLeagueTable
}
