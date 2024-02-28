import mailchimp from "@mailchimp/mailchimp_marketing";
import { NextResponse } from "next/server";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

export async function POST(req) {
  try {
    const { email } = await req.json();
    if (!email)
      return NextResponse.json(
        { message: "Need valid email!"},
        { status: 401 }
      );
    const res = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      { email_address: `${email}`, status: "subscribed" }
    );

    return new Response(JSON.stringify(res));
  } catch (error) {
    return new Response(JSON.stringify({error: JSON.parse(error.response.text)})
    );
  }
}
