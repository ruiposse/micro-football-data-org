import fetch from 'node-fetch'
import config from '@/config'

async function getCompetitions () {
  console.log('api -> get competitions')
  return fetch(`${config.baseUrl}/competitions`)
}

function getTeamsInCompetition (competitionId) {
  // return fetch(`${config.baseUrl}/`)
}

export default {
  getCompetitions,
  getTeamsInCompetition
}
