// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ message: 'Method not allowed' });
//     }

//     const { name, email, message } = req.body;

//     // Create a transporter using a free email service like Gmail
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS,
//         },
//     });

//     try {
//         await transporter.sendMail({
//             from: `"Contact Form" <${process.env.EMAIL_USER}>`,
//             to: process.env.RECEIVING_EMAIL,
//             subject: 'New Contact Form Submission',
//             html: `
//                 <h3>New Contact Form Submission</h3>
//                 <p><strong>Name:</strong> ${name}</p>
//                 <p><strong>Email:</strong> ${email}</p>
//                 <p><strong>Message:</strong> ${message}</p>
//             `,
//         });

//         return res.status(200).json({ success: true });
//     } catch (error) {
//         console.error('Error sending email:', error);
//         return res.status(500).json({ error: 'Error sending message' });
//     }
// }

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { name, email, message } = await request.json();

    // Configure Nodemailer (Gmail example)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"Contact Form" <${email}>`,
            to: process.env.RECEIVING_EMAIL || process.env.EMAIL_USER,
            subject: `New message from ${name}`,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
