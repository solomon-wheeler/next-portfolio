import { NextResponse } from "next/server";

interface Request {
  // Define the properties and their types for the request object
  // For example:
  method: string;
  headers: Record<string, string>;
  // Add more properties as needed
}

// To handle a GET request to /api
export async function GET(request: Request) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
