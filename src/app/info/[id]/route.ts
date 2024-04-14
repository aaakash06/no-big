import { getInfo, getRealUrl } from "@/utility/actions.db";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(_request: NextRequest, { params }: { params: { id: string } }) {
  console.log(params.id);
  const url = await getInfo(params.id);
  if (url) {
    return NextResponse.json({
      status: "ok",
      info: {
        url,
        clicks: url.interactions.length,
      },
    });
  }
  return NextResponse.json({ message: "no route found" });
}
