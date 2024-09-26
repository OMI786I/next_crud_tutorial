import connectMongoDB from "@/app/lib/mongodb";
import ProductModel from "../../../../models/ProducntionModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, image, price, category } = await request.json();
  await connectMongoDB();
  const newProduct = await ProductModel.create({
    name,
    image,
    price,
    category,
  });
  return NextResponse.json(
    { message: "Product Created", newProduct },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const products = await ProductModel.find();
  return NextResponse.json({ products });
}
