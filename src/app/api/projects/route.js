import { connect } from "@/lib/dbConfig";
import { projects } from "@/lib/models/projects";
import { NextResponse } from "next/server";
connect();
export const revalidate = 0;
export async function GET() {
  let projectData = [];
  try {
    projectData = await projects.find();
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Caught a TypeError:", error.message);
    }
    projectData = `some problem: ${error.message}`;
    return NextResponse.json({ result: projectData, success: false });
  }
  return NextResponse.json({ result: projectData, success: true });
}
