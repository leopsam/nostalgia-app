import fastify from 'fastify'
import { memoryRoutes } from './routes/memories'

const app = fastify()

app.register(memoryRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
