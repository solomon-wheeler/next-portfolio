import nodemailer from 'nodemailer';

export async function POST(req: any) {
  const body = await req.json();
  const { name, email, message } = body;

  if (req.method === 'POST') {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
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
        console.error(`Error: ${error}`);
        console.error(`Info: ${info}`);
        return new Response(`An error occured whilst sending email`, {
          status: 500,
        });
      } else {
        return new Response('An unknown error occurred', {
          status: 500,
        });
      }
    }
  } else {
    return new Response('Only post requests allowed', {
      status: 405,
    });
  }
}
