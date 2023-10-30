import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { recipeId, userEmail } = body;
    //check if user exist
    const existingUserByEmail = await db.user.findUnique({
      where: { email: userEmail },
    });
    if (!existingUserByEmail) {
      return NextResponse.json(
        { lock: true, message: "Need to sign in first" },
        { status: 204 }
      );
    }
    //set lock on form
    const existingReviewByUser = await db.review.findFirst({
      where: { userId: existingUserByEmail.id, recipeId: recipeId },
    });
    if (existingReviewByUser) {
      return NextResponse.json(
        { lock: true, message: "Review already submitted" },
        { status: 208 }
      );
    }
    // return NextResponse.json(
    //   { formLock: false, message: "Free to make a review" },
    //   { status: 201 }
    // );
    return NextResponse.json(
      { lock: false,  message: "Continue" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something Wrong!" },
      { status: 500 }
    );
  }
}
