import { connect } from "@/lib/dbConfig";
import { projects } from "@/lib/models/projects";
import { NextResponse } from "next/server";
connect();
export const revalidate = 0;
export async function GET(req, { params }) {

  let projectData = {};
  try {
    projectData = await projects.findById(params.id);
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Caught a TypeError:", error.message);
    }
    projectData = `some problem: ${error.message}`;
    return NextResponse.json({ result: projectData, success: false });
  }
  return NextResponse.json({ result: projectData, success: true });
}
