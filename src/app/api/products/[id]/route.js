import connectMongoDB from "@/app/lib/mongodb";
import ProductModel from "../../../../../models/ProducntionModel";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const products = await ProductModel.findOne({ _id: id });
  return NextResponse.json({ products });
}

export async function PUT(request, { params }) {
  const { id } = params;
  const { name, image, price, category } = await request.json();
  await connectMongoDB();
  await ProductModel.findByIdAndUpdate(id, { name, image, price, category });
  return NextResponse.json({ message: "Product updated" }, { status: 200 });
}

export async function DELETE(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  await ProductModel.findByIdAndDelete(id);
  return NextResponse.json({ message: "Product deleted" });
}
