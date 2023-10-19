import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { recipeId, score, title, review, recommend, userId } = body;
    //check if email already exist
    const existingUserById = await db.user.findUnique({
      where: { id: userId },
    });
    if (existingUserById) {
      return NextResponse.json(
        { review: null, message: "Need to sign in first" },
        { status: 409 }
      );
    }
    const newReview = await db.review.create({
      data: {
        recipeId,
        score,
        title,
        review,
        recommend,
        userId,
      },
    });
    return NextResponse.json(
      { review: newReview, message: "Review Successfully sent!" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something Wrong!" }, { status: 505 });
  }
}
