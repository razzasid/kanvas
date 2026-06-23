import { account } from '../config/appwrite.js'
import { signUpSchema, signInSchema } from '../schemas/auth.js'
import { formatZodError, formatAppwriteError } from '../utils/errorFormatters.js'
import { parseJsonBody } from '../utils/parsers.js'

export const registerAuthRoutes = (app) => {
    app.post('/api/auth/sign-up', async (c) => {
        const body = await parseJsonBody(c)
        if (!body) {
            return c.json({ errors: { global: ['Request body must be valid JSON'] } }, 400)
        }

        const result = signUpSchema.safeParse(body)
        if (!result.success) {
            return c.json(formatZodError(result.error), 400)
        }

        try {
            const user = await account.create('unique()', result.data.email, result.data.password, result.data.name)
            return c.json({ user }, 201)
        } catch (error) {
            console.error('[auth] sign-up error:', error?.message)
            return c.json(formatAppwriteError(error), error?.code === 400 ? 400 : 500)
        }
    })

    app.post('/api/auth/sign-in', async (c) => {
        const body = await parseJsonBody(c)
        if (!body) {
            return c.json({ errors: { global: ['Request body must be valid JSON'] } }, 400)
        }

        const result = signInSchema.safeParse(body)
        if (!result.success) {
            return c.json(formatZodError(result.error), 400)
        }

        try {
            const session = await account.createEmailSession(result.data.email, result.data.password)
            return c.json({ session })
        } catch (error) {
            console.error('[auth] sign-in error:', error?.message)
            return c.json(formatAppwriteError(error), error?.code === 400 ? 400 : 500)
        }
    })
}
