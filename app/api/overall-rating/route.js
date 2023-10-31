import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { recipeId } = body;
    //get all reviews with id
    const allReviews = await db.review.aggregate({
      where: { recipeId: recipeId },
      _avg: {
        score: true,
      },
      _count: {
        review: true,
      },
    });
    const count = [];
    for (let i = 1; i <= 5; i++) {
      const scoreCount = await db.review.aggregate({
        where: { recipeId: recipeId, score: i },
        _count: {
          score: true,
        },
      });
      count.push({ key: i, value:scoreCount._count.score });
    }
    const data = {
      avg: allReviews._avg.score,
      count: allReviews._count.review,
      all_1: count[0],
      all_2: count[1],
      all_3: count[2],
      all_4: count[3],
      all_5: count[4],
    }
    return NextResponse.json(
      { data: data, message: "Data Received" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something Wrong!", error: error },
      { status: 500 }
    );
  }
}
