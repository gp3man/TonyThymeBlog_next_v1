import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { recipeId, userEmail } = body;
    const existingUserByEmail = await db.user.findUnique({
      where: { email: userEmail },
    });
    if (!existingUserByEmail) {
      return NextResponse.json(
        { formLock: null, message: "Need to sign in first!" },
        { status: 404 }
      );
    }
    const existingReviewByUser = await db.review.findFirst({
      where: {userId: existingUserByEmail.id, recipeId: recipeId},
    });
    if (existingReviewByUser) {
      return NextResponse.json(
        { formLock: true, message: "Review already submitted" },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { recipeId: recipeId, message: "Review Successfully sent!" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { review: null, message: "Something Wrong!" },
      { status: 505 }
    );
  }
}
