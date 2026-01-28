import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, industry, phone, services, details } = body;

    // 1. Configure Transporter (Gmail SMTP)
   const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',  // Correct SMTP host
  port: 587,                   // TLS port
  secure: false,               // false for port 587, true for 465
  auth: {
    user: process.env.Email_User,
    pass: process.env.Email_Pass, // make sure it's correct
  },
});

    // 2. Email Content (Professional HTML Template)
    const mailOptions = {
      from: `"Sunny Software Web" <${process.env.Email_User}>`,
    //   to: "sales@webcroz.com",
    to:'saquibpervez01@gmail.com',
      subject: `New Lead: ${name} - ${industry}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #4F46E5;">New Project Inquiry</h2>
          <p>You have received a new lead from the website contact form.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold;">Name:</td>
              <td style="padding: 10px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Email:</td>
              <td style="padding: 10px;">${email}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold;">Phone:</td>
              <td style="padding: 10px;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Industry:</td>
              <td style="padding: 10px;">${industry}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Interests:</td>
              <td style="padding: 10px;">${services.join(', ')}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-left: 4px solid #4F46E5;">
            <strong>Project Details:</strong><br/>
            ${details}
          </div>
        </div>
      `,
    };

    // 3. Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });

  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}