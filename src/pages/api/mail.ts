// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mail from "@sendgrid/mail";

type Data = {
  name: string;
};

mail.setApiKey(
  process.env.SENDGRID_API_KEY ? process.env.SENDGRID_API_KEY : "",
);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const body = JSON.parse(req.body);
  const message = `
  Name: ${body.fullName}\r\n
  Email: ${body.email}\r\n
  Subject: ${body.subject}\r\n
  Message: ${body.message}\r\n
  `;

  const data = {
    to: "eltezza.ltd@gmail.com",
    from: "hello@eltezza.com",
    subject: `[CONTACT FORM]: ${body.subject}`,
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);

  res.status(200).json({ name: "John Doe" });
}
