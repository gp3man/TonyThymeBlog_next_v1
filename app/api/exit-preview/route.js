import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
export async function GET(request, res) {
  draftMode().disable();
  const url = `/recipes`;
  return redirect('/');
}
