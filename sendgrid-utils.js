// SendGrid Email Utility for GymVid
// Install: npm install @sendgrid/mail

const sgMail = require('@sendgrid/mail');

// Initialize with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'hello@gymvid.com';
const FROM_NAME = process.env.FROM_NAME || 'GymVid';

/**
 * Send a simple email
 * @param {string} to - Recipient email
 * @param {string} subject - Email subject
 * @param {string} text - Plain text content
 * @param {string} html - HTML content (optional)
 */
async function sendEmail({ to, subject, text, html }) {
  const msg = {
    to,
    from: {
      email: FROM_EMAIL,
      name: FROM_NAME
    },
    subject,
    text,
    ...(html && { html })
  };

  try {
    await sgMail.send(msg);
    console.log(`✅ Email sent successfully to ${to}`);
    return { success: true };
  } catch (error) {
    console.error('❌ Error sending email:', error);
    if (error.response) {
      console.error(error.response.body);
    }
    return { success: false, error };
  }
}

/**
 * Send email using a template
 * @param {string} to - Recipient email
 * @param {string} templateId - SendGrid template ID
 * @param {object} dynamicData - Template variables
 */
async function sendTemplateEmail({ to, templateId, dynamicData }) {
  const msg = {
    to,
    from: {
      email: FROM_EMAIL,
      name: FROM_NAME
    },
    templateId,
    dynamicTemplateData: dynamicData
  };

  try {
    await sgMail.send(msg);
    console.log(`✅ Template email sent successfully to ${to}`);
    return { success: true };
  } catch (error) {
    console.error('❌ Error sending template email:', error);
    if (error.response) {
      console.error(error.response.body);
    }
    return { success: false, error };
  }
}

/**
 * Send welcome email to new users
 */
async function sendWelcomeEmail(userEmail, userName) {
  return sendEmail({
    to: userEmail,
    subject: 'Welcome to GymVid! 🎉',
    text: `Hi ${userName},\n\nWelcome to GymVid! We're excited to have you on board.\n\nGet started by uploading your first gym video.\n\nBest regards,\nThe GymVid Team`,
    html: `
      <div style="font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #1C1C1E; font-size: 24px; font-weight: 700;">Welcome to GymVid! 🎉</h1>
        <p style="font-size: 16px; color: #1C1C1E;">Hi ${userName},</p>
        <p style="font-size: 16px; color: #1C1C1E;">Welcome to GymVid! We're excited to have you on board.</p>
        <p style="font-size: 16px; color: #1C1C1E;">Get started by uploading your first gym video.</p>
        <p style="font-size: 16px; color: #8E8E93; margin-top: 32px;">Best regards,<br>The GymVid Team</p>
      </div>
    `
  });
}

/**
 * Send password reset email
 */
async function sendPasswordResetEmail(userEmail, resetToken) {
  const resetUrl = `https://gymvid.com/reset-password?token=${resetToken}`;
  
  return sendEmail({
    to: userEmail,
    subject: 'Reset Your GymVid Password',
    text: `You requested a password reset.\n\nClick here to reset your password: ${resetUrl}\n\nThis link will expire in 1 hour.\n\nIf you didn't request this, please ignore this email.\n\nBest regards,\nThe GymVid Team`,
    html: `
      <div style="font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #1C1C1E; font-size: 24px; font-weight: 700;">Reset Your Password</h1>
        <p style="font-size: 16px; color: #1C1C1E;">You requested a password reset.</p>
        <a href="${resetUrl}" style="display: inline-block; background-color: #007AFF; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; margin: 16px 0; font-weight: 600;">Reset Password</a>
        <p style="font-size: 14px; color: #8E8E93;">This link will expire in 1 hour.</p>
        <p style="font-size: 14px; color: #8E8E93;">If you didn't request this, please ignore this email.</p>
        <p style="font-size: 16px; color: #8E8E93; margin-top: 32px;">Best regards,<br>The GymVid Team</p>
      </div>
    `
  });
}

/**
 * Send video upload confirmation
 */
async function sendVideoUploadConfirmation(userEmail, userName, videoTitle) {
  return sendEmail({
    to: userEmail,
    subject: 'Your Video Has Been Uploaded Successfully! 🎥',
    text: `Hi ${userName},\n\nYour video "${videoTitle}" has been uploaded successfully to GymVid!\n\nYou can now share it with your friends and track your progress.\n\nBest regards,\nThe GymVid Team`,
    html: `
      <div style="font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #1C1C1E; font-size: 24px; font-weight: 700;">Video Uploaded Successfully! 🎥</h1>
        <p style="font-size: 16px; color: #1C1C1E;">Hi ${userName},</p>
        <p style="font-size: 16px; color: #1C1C1E;">Your video <strong>"${videoTitle}"</strong> has been uploaded successfully to GymVid!</p>
        <p style="font-size: 16px; color: #1C1C1E;">You can now share it with your friends and track your progress.</p>
        <p style="font-size: 16px; color: #8E8E93; margin-top: 32px;">Best regards,<br>The GymVid Team</p>
      </div>
    `
  });
}

// Export functions
module.exports = {
  sendEmail,
  sendTemplateEmail,
  sendWelcomeEmail,
  sendPasswordResetEmail,
  sendVideoUploadConfirmation
};
