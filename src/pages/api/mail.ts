// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

type Data = {
  id?: string;
  error?: string;
};

export const config = {
  api: {
    externalResolver: true,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const resend = new Resend(process.env.RESEND_API_KEY!);
  try {
    const body = await JSON.parse(req.body);
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "toddguitarc@gmail.com",
      subject: `[CONTACT FORM]: ${body.subject}`,
      html: `
        <div>
          <p><strong>Name:</strong> ${body.fullName}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Subject:</strong> ${body.subject}</p>
          <p><strong>Message:</strong> ${body.message}</p>
        </div>
      `,
    });

    if (error) {
      return res.status(500).json({ error: error?.message });
    }

    return res.status(200).json({ id: data?.id });
  } catch (error: unknown) {
    return res.status(500).json({ error: "Internal Server error" });
  }
}
