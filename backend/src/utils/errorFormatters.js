export const formatZodError = (error) => ({
    errors: error.flatten().fieldErrors,
})

export const formatAppwriteError = (error) => {
    if (error?.response?.body) {
        try {
            const body = JSON.parse(error.response.body)
            const message = body.message || body.error || JSON.stringify(body)
            return { errors: { global: [message] } }
        } catch {
            return { errors: { global: [error.message || 'Authentication failed'] } }
        }
    }
    return { errors: { global: [error?.message || 'Authentication failed'] } }
}
