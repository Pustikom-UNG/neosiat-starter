import { auth } from "auth"

export const GET = auth((req) => {
    if (req.auth) return Response.json({ data: "Protected data", auth: req.auth })
    return Response.json({ message: "Not authenticated" }, { status: 401 })
}) as any
