import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

export async function POST(req, res) {
  try{
    let reqBody = await req.json();
    reqBody.otp="0";
    const prisma =new PrismaClient();
    const user = await prisma.users.create({
        data: reqBody,
    })
    return NextResponse.json({status:"success",data:user})
  }
    catch(error){
        return NextResponse.json({status:"error",data:error})    
    }
}