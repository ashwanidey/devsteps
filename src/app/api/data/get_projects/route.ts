import Project from "@models/projects"
import dbconnect from "@lib/dbconnect";
import { NextResponse,NextRequest } from "next/server"


export async function GET(request: Request){
  try {
    await dbconnect();
    const projects = await Project.find();
    return Response.json(
      {  projects },
      {
        status: 200,
      }
    );
  } catch (error : any) {
    return Response.json(
      {message : error.message},
      {status : 400}
    )
  }
}