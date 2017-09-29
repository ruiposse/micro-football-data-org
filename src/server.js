import micro from 'micro'
import { get, router } from 'microrouter'
import routes from '@/routes/index'

const server = micro(
  router(
    get('/competitions', routes.competitions.getCompetitions),
    get('/competitions/:competitionId', routes.competitions.getCompetition),
    get('/competitions/:competitionId/teams', routes.competitions.getCompetitionTeams),
    get('/competitions/:competitionId/fixtures', routes.competitions.getCompetitionFixtures),
    get('/competitions/:competitionId/leagueTable', routes.competitions.getLeagueTable),
    get('/teams/:teamId', routes.teams.getTeam),
    get('/teams/:teamId/fixtures', routes.teams.getTeamFixtures),
    get('/teams/:teamId/players', routes.teams.getTeamPlayers),
    get('/fixtures', routes.fixtures.getFixtures)
  )
)

server.listen(3000, () => {
  console.log('listening on port 3000')
})
