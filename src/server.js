import micro, { send } from 'micro'
import { get, router } from 'microrouter'
import routes from '@/routes/index'

const server = micro(
  router(
    get('/competitions', routes.competitions.getCompetitions),
    get('/fixtures', routes.fixtures.getFixtures),
    get('/lala', (req, res) => send(res, 200, 'lala'))
    // (req, res) => send(res, 404, 'not found')
  )
)

server.listen(3000, () => {
  console.log('listening on port 3000')
})
