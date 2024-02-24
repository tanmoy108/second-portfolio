import { connect } from "@/lib/dbConfig";
import { educations } from "@/lib/models/educations";
import { NextResponse } from "next/server";
connect();
export const revalidate = 0;
export async function GET() {
  let educationData = [];
  try {
    educationData = await educations.find();
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Caught a TypeError:", error.message);
    }
    educationData = `some problem: ${error.message}`;
    return NextResponse.json({ result: educationData, success: false });
  }
  return NextResponse.json({ result: educationData, success: true });
}
