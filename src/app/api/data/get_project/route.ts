import Project from "@models/projects"
import dbconnect from "@lib/dbconnect";
import { NextResponse,NextRequest } from "next/server"
import { getServerSession } from 'next-auth/next';
import { User } from "next-auth";


export async function POST(request: Request){
  try {
    await dbconnect();
    const {projectid,userid}  = await request.json();
    

    
    const project = await Project.findOne({projectid:projectid});
    return Response.json(
      {  project },
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