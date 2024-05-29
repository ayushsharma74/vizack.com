import Admin from "@/models/admin.model"
import { error } from "console";
import { randomUUID } from "crypto";
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"


export async function POST(req) {
    const { username, password } = await req.json()
    console.log(username);
    console.log(password);


    const USERNAME = "admin"
    const PASSWORD = "admin"

    if (username != USERNAME && password != PASSWORD) {
        return NextResponse.json({ error: "error response" })
    }

    const token = randomUUID()
    console.log(token);
    const res = NextResponse.json(
        {
            message: "Login Success",
            success: true
        }
    )
    res.cookies.set("token", token, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 // 30 DAYS
    })

    return res

}