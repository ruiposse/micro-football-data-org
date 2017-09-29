import micro from 'micro'
import { get, router } from 'microrouter'
import routes from '@/routes/index'

const server = micro(
  router(
    get('/competitions', routes.competitions.getCompetitions),
    get('/fixtures', routes.fixtures.getFixtures)
  )
)

server.listen(3000, () => {
  console.log('listening on port 3000')
})
