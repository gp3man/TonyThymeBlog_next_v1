import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { recipeId } = body;
    //get all reviews with id
    const allReviews = await db.review.aggregate({
      where: { recipeId: recipeId },
      _avg:{
        score: true
      },
      _count:{
        review: true
      }
    });
    console.log(allReviews)
    return NextResponse.json(
      { message: "Data Received" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something Wrong!", error: error },
      { status: 500 }
    );
  }
}
