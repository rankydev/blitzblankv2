import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { fname, lname, email, phone, purpose, message } = body;

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PW,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_ADDRESS,
      to: process.env.EMAIL_ADDRESS_RECIPIENT,
      subject: `Neue Kontaktanfrage - ${fname} ${lname}`,
      text: `
        Name: ${fname} ${lname}
        E-Mail: ${email}
        Telefon: ${phone ? phone : "Nicht angegeben"}
        Betreff: ${purpose}
        Nachricht: ${message}
      `,
      html: `
        <p><strong>Name:</strong> ${fname} ${lname}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone ? phone : "Nicht angegeben"}</p>
        <p><strong>Betreff:</strong> ${purpose}</p>
        <p><strong>Nachricht:</strong> ${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "E-Mail erfolgreich gesendet!",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error("Fehler beim Senden der E-Mail:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Das Senden der E-Mail ist fehlgeschlagen.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}
