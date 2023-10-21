import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { recipeId, score, title, review, recommend, userEmail } = body;
    const existingUserByEmail = await db.user.findUnique({
      where: { email: userEmail },
    });
    if (!existingUserByEmail) {
      return NextResponse.json(
        { review: null, message: "Need to sign in first" },
        { status: 409 }
      );
    }
    const newReview = await db.review.create({
      data: {
        recipeId,
        score: parseInt(score),
        title,
        review,
        recommend,
        userId: existingUserByEmail.id,
      },
    });
    if(!newReview){
      return NextResponse.json({ review: null, message: "Failed to post new review!", }, { status: 404 });
    }
    return NextResponse.json(
      { review: newReview, message: "Review Successfully sent!" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ review: null, message: "Something Wrong!" }, { status: 505 });
  }
}
