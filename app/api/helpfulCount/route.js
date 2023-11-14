import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { reviewId } = body;
    if (!reviewId) {
      return NextResponse.json(
      { counts: {yess:null, nos:null} },
      { status: 200 }
    );
  };
    const yes_agg = await db.usefulReview.aggregate({
      _count: {
        id: true,
      },
      where: { reviewId: reviewId, useful: true },
    });
    const yess = yes_agg._count.id
    const no_agg = await db.usefulReview.aggregate({
      _count: {
        id: true,
      },
      where: { reviewId: reviewId, useful: false },
    });
    const nos = no_agg._count.id
    return NextResponse.json(
      { counts: {yess, nos} },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something Wrong!", error: error },
      { status: 500 }
    );
  }
}
