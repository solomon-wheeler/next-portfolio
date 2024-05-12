import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export async function POST(req: any) {
  const body = await req.json();
  const { name, email, message } = body;

  if (req.method === "POST") {
    let transporter = nodemailer.createTransport({
      service: "gmail", // replace with your email service
      auth: {
        user: process.env.EMAIL, // replace with your email
        pass: process.env.PASSWORD,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL,
      to: "solly.wheeler@gmail.com",
      subject: `Email from ${name}`,
      text: `From: ${email}\n Message: ${message}`,
    };

    let info = await transporter.sendMail(mailOptions);

    return new Response("Hello", {
      status: 200,
    });
  } else {
    return new Response("Only post requests allowed", {
      status: 405,
    });
  }
}
