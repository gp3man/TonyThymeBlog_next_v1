import mailchimp from "@mailchimp/mailchimp_marketing"

export async function POST(req) {
  try {
    mailchimp.setConfig({
      apiKey: process.env.MAILCHIMP_API_KEY,
      server: process.env.MAILCHIMP_API_SERVER,
    });

    async function callPing() {
      const response = await mailchimp.ping.get();
      console.log(response);
    }
    callPing();
    console.log(req);
  } catch (error) {
    return NextResponse.json(
      { message: "Something Wrong!", error: error },
      { status: 500 }
    );
  }
}
