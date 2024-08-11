import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export async function POST(req: any) {
  const body = await req.json();
  const { name, email, message } = body;

  if (req.method === 'POST') {
    let transporter = nodemailer.createTransport({
      service: 'gmail', // replace with your email service
      auth: {
        user: process.env.EMAIL, // replace with your email
        pass: process.env.PASSWORD,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL,
      to: 'solly.wheeler@gmail.com',
      subject: `Email from ${name}`,
      text: `From: ${email}\n Message: ${message}`,
    };
    let info;
    try {
      info = await transporter.sendMail(mailOptions);
    } catch (error) {
      if (error instanceof Error) {
        return new Response(`Error: ${error.message}, Info: ${info}`, {
          status: 500,
        });
      } else {
        return new Response('An unknown error occurred', {
          status: 500,
        });
      }
    }
    return new Response('Hello', {
      status: 200,
    });
  } else {
    return new Response('Only post requests allowed', {
      status: 405,
    });
  }
}
