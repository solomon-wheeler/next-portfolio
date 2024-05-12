import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    let transporter = nodemailer.createTransport({
      service: 'gmail', // replace with your email service
      auth: {
        user: process.env.EMAIL, // replace with your email
        pass: process.env.PASSWORD, // replace with your email password
      },
    });

    let mailOptions = {
      from: process.env.EMAIL, // sender address
      to: 'solly.wheeler@gmail.com', // list of receivers
      subject: 'Email from Next.js app', // Subject line
      text: 'Hello world?', // plain text body
    };

    let info = await transporter.sendMail(mailOptions)
    console.log(info)

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ message: 'Only POST requests allowed' });
  }
}