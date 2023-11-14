import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { recipeId } = body;
    const reviews = await db.review.findMany({
      where: { recipeId: recipeId },
      include: {
        author:{
          select:{
            name: true,
            username: true,
            image: true,
          }
        },
      },
    });
    return NextResponse.json(
      { reviews: reviews, message: "Reviews" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { reviews: null, message: "Something Wrong!" },
      { status: 500 }
    );
  }
}
