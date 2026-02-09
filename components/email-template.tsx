import * as React from 'react';

interface EmailTemplateProps {
  email: string;
}

export function EmailTemplate({ email }: EmailTemplateProps) {
  return (
    <div>
      <h1>Welcome to the Adptiv Waitlist!</h1>
      <p>Thank you for joining our waitlist, {email}!</p>
      <p>We'll keep you updated on our progress and let you know when we're ready to launch.</p>
      <p>Best regards,<br />The Adptiv Team</p>
    </div>
  );
}