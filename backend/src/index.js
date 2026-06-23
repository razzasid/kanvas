import "dotenv/config"
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { corsMiddleware } from './middleware/cors.js'
import { registerAuthRoutes } from './routes/auth.js'

const app = new Hono()
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173'

// Middleware
app.use('*', corsMiddleware(frontendUrl))

// Routes
app.get('/', (c) => c.text('Hello Raza!'))
registerAuthRoutes(app)

// Server startup
serve({
  fetch: app.fetch,
  port: Number(process.env.PORT) || 3000,
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
