export const corsMiddleware = (frontendUrl) => {
    return async (c, next) => {
        c.header('Access-Control-Allow-Origin', frontendUrl)
        c.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
        c.header('Access-Control-Allow-Headers', 'Content-Type,Authorization')
        c.header('Access-Control-Allow-Credentials', 'true')
        if (c.req.method === 'OPTIONS') return c.text('', 204)
        await next()
    }
}
