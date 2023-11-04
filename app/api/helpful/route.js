import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { reviewId, reader, grade } = body;
    //check if user exist
    const foundReader = await db.user.findUnique({
      where:{
        email: reader,
      }
    })
    if (!foundReader){
      return NextResponse.json(
            { thumb: null, message: "Need To Sign in" },
            { status: 204 }
          );
    }
    const existingThumb = await db.usefulReview.findFirst({
      where: { readerId: foundReader.id, reviewId: reviewId },
    });
    if (existingThumb) {
      const updatedThumb = await db.usefulReview.update({
        where: {
          id: existingThumb.id
        },
        data:{
          useful: grade,
        }
      })
      return NextResponse.json(
        { thumb: updatedThumb, message: "Updated helpful!" },
        { status: 201 }
      );
    }
    const newThumb = await db.usefulReview.create({
      data:{
        readerId: foundReader.id,
        useful: grade,
        reviewId: reviewId,
      }
    })
    return NextResponse.json(
      { thumb: newThumb,  message: "New Response!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something Wrong!", error: error },
      { status: 500 }
    );
  }
}
