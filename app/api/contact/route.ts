import { NextRequest, NextResponse } from 'next/server';

// Import SendGrid utility
const sgMail = require('@sendgrid/mail');

// Initialize SendGrid with API key from environment
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, message } = body;

    // Validate required fields
    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      );
    }

    // Send confirmation email to the user
    const userEmail = {
      to: email,
      from: {
        email: process.env.SENDGRID_FROM_EMAIL || 'hello@gymvid.com',
        name: process.env.FROM_NAME || 'GymVid'
      },
      subject: 'Thanks for contacting GymVid!',
      text: `Hi ${name},\n\nThanks for reaching out to GymVid! We received your message and will get back to you soon.\n\n${message ? `Your message:\n"${message}"\n\n` : ''}Best regards,\nThe GymVid Team`,
      html: `
        <div style="font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #1C1C1E; font-size: 24px; font-weight: 700;">Thanks for contacting GymVid!</h1>
          <p style="font-size: 16px; color: #1C1C1E;">Hi ${name},</p>
          <p style="font-size: 16px; color: #1C1C1E;">Thanks for reaching out! We received your message and will get back to you soon.</p>
          ${message ? `<div style="background-color: #F2F2F7; padding: 16px; border-radius: 8px; margin: 20px 0;">
            <p style="font-size: 14px; color: #8E8E93; margin: 0;">Your message:</p>
            <p style="font-size: 16px; color: #1C1C1E; margin: 8px 0 0 0;">"${message}"</p>
          </div>` : ''}
          <p style="font-size: 16px; color: #8E8E93; margin-top: 32px;">Best regards,<br>The GymVid Team</p>
        </div>
      `
    };

    // Send notification email to hello@gymvid.com
    const notificationEmail = {
      to: 'hello@gymvid.com',
      from: {
        email: process.env.SENDGRID_FROM_EMAIL || 'hello@gymvid.com',
        name: process.env.FROM_NAME || 'GymVid'
      },
      subject: `New Contact Form Submission from ${name}`,
      text: `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message || 'No message provided'}`,
      html: `
        <div style="font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #1C1C1E; font-size: 24px; font-weight: 700;">New Contact Form Submission</h1>
          <div style="background-color: #F2F2F7; padding: 16px; border-radius: 8px; margin: 20px 0;">
            <p style="font-size: 16px; color: #1C1C1E; margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 16px; color: #1C1C1E; margin: 8px 0;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 16px; color: #1C1C1E; margin: 8px 0;"><strong>Message:</strong></p>
            <p style="font-size: 16px; color: #1C1C1E; margin: 8px 0;">${message || 'No message provided'}</p>
          </div>
        </div>
      `
    };

    // Send both emails
    await Promise.all([
      sgMail.send(userEmail),
      sgMail.send(notificationEmail)
    ]);

    return NextResponse.json(
      { success: true, message: 'Emails sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
