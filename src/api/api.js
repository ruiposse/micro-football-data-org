import fetch from 'node-fetch'
import config from '@/config'

//
// Competitions
//

async function getCompetitions () {
  return fetch(`${config.baseUrl}/competitions`)
}

async function getCompetition (competitionId) {
  return fetch(`${config.baseUrl}/competitions/${competitionId}`)
}

async function getCompetitionTeams (competitionId) {
  return fetch(`${config.baseUrl}/competitions/${competitionId}/teams`)
}

async function getCompetitionFixtures (competitionId) {
  return fetch(`${config.baseUrl}/competitions/${competitionId}/fixtures`)
}

async function getLeagueTable (competitionId) {
  return fetch(`${config.baseUrl}/competitions/${competitionId}/leagueTable`)
}

//
// Teams
//

async function getTeam (teamId) {
  return fetch(`${config.baseUrl}/teams/${teamId}`)
}

async function getTeamFixtures (teamId) {
  return fetch(`${config.baseUrl}/teams/${teamId}/fixtures`)
}

async function getTeamPlayers (teamId) {
  return fetch(`${config.baseUrl}/teams/${teamId}/players`)
}

//
// Fixtures
//

async function getFixtures () {
  return fetch(`${config.baseUrl}/fixtures`)
}

export default {
  getCompetitions,
  getCompetition,
  getCompetitionTeams,
  getCompetitionFixtures,
  getLeagueTable,
  getTeam,
  getTeamFixtures,
  getTeamPlayers,
  getFixtures
}
