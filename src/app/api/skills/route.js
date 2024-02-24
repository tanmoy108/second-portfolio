import { connect } from "@/lib/dbConfig";
import { skills } from "@/lib/models/skill";
import { NextResponse } from "next/server";
connect();
export const revalidate = 0;
export async function GET() {
  let skillData = [];
  try {
    skillData = await skills.find()
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Caught a TypeError:", error.message);
    }
    skillData = `some problem: ${error.message}`;
    return NextResponse.json({ result: skillData, success: false });
  }
  return NextResponse.json({ result: skillData, success: true });
}
