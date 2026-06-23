export const parseJsonBody = async (c) => {
    try {
        return await c.req.json()
    } catch {
        return null
    }
}
