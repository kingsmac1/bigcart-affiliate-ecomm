import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

async function sendEmail(to: string, subject: string, html: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.FROM_EMAIL,
      to,
      subject,
      html,
    }),
  });
  if (!res.ok) throw new Error(`Resend error: ${await res.text()}`);
  return res.json();
}

// Newsletter subscription
export const subscribeNewsletter = createServerFn({ method: "POST" })
  .inputValidator(z.object({ email: z.string().email() }))
  .handler(async ({ data }) => {
    const adminEmail = process.env.TO_EMAIL!;

    // Notify yourself
    await sendEmail(
      adminEmail,
      "New BigCart Newsletter Subscriber",
      `<p>New subscriber: <strong>${data.email}</strong></p>`
    );

    // Confirm to subscriber
    await sendEmail(
      data.email,
      "Welcome to BigCart Newsletter 🎉",
      `<h2>You're in!</h2>
       <p>Thanks for subscribing to BigCart. We'll send you the best product picks once a week — no spam, ever.</p>
       <p>– The BigCart Team</p>`
    );

    return { ok: true };
  });