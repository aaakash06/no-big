import { getInfo, getRealUrl } from "@/utility/actions.db";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(request, { params }: { params: { id: string } }) {
  console.log(params.id)
  const url = await getInfo(params.id)
  if (url) {
    redirect(url);
   
    return NextResponse.json({ status: "ok" });
  }
  return NextResponse.json({ message: "no route found" });
}
