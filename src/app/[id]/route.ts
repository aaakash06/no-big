import { getRealUrl } from "@/utility/actions.db";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest, { params }: { params: { id: string } }) {
  console.log(params.id)
  const url = await getRealUrl(params.id);
  if (url) {
    redirect(url);
    
    return NextResponse.json({ status: "ok" });
  }
  return NextResponse.json({ message: "no route found" });
}
