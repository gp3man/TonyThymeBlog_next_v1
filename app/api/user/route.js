import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, username, password } = body;

    //check if email already exist
    const existingUserByEmail = await db.user.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "User with this email already exist" },
        { status: 409 }
      );
    }
    const existingUserByUsername = await db.user.findUnique({
      where: { username: username },
    });
    if (existingUserByUsername) {
      return NextResponse.json(
        { user: null, message: "User with this username already exist" },
        { status: 409 }
      );
    }
    const hashedPW = await hash(password, 10)
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPW
      },
    });
    const {password: newUserPW, ...rest } = newUser;

    return NextResponse.json({user: rest, message: "User created successfully!"}, {status: 201});
  } catch (error) {
    console.log(error)
    return NextResponse.json({message: "Something Wrong!"}, {status: 505});
  }
}
