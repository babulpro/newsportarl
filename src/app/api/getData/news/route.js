 
 
import dbConnect from "@/app/lib/db/db"; 
import { NewsList } from "@/app/lib/db/model/AllModel";
import { NextResponse } from "next/server";  


export async function POST(req, res) {
 
  try {
    const { title, short_des, img1, img2, img3, img4, keywords, long_des, type, catID, comments } = await req.json();

    if (!catID) {
      return NextResponse.json({status:"failed",msg:"Category ID is required"}, { status: 400 });
    }

    const NewsDetails = {
      title,
      short_des,
      img1,
      img2,
      img3,
      img4,
      keywords,
      long_des,
      type,
      catID,
      comments: Array.isArray(comments) ? comments : [] // Ensure it's an array
    };

    let result = await NewsList.create({ ...NewsDetails });

    return NextResponse.json({status:"success",data:result});
  } catch (error) {
    return res.status(500).json({ error: "Internal server error", details: error.message });
  }
}


export async function GET(req) {
    await dbConnect();

    try {
        const newsList = await NewsList.find({});
        return NextResponse.json({ status: "ok", data: newsList }); // Remove [0] to return all items
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ status: "false", msg: error.message }, { status: 400 });
    }
}
