# Email Configuration Setup

## Gmail App Password Setup (Required)

The contact form is now configured to send emails to `roshan00179@gmail.com`. To make this work, you need to create a **Gmail App Password**.

### Steps to Create Gmail App Password:

1. **Go to**: https://myaccount.google.com/apppasswords

2. **Sign in** to your Google account (roshan00179@gmail.com)

3. **Select an app and device**:
   - App: Select "Mail"
   - Device: Select "Windows Computer" (or your current device type)

4. **Google will generate** a 16-character password (format: `xxxx xxxx xxxx xxxx`)

5. **Copy the password** and paste it into your `.env.local` file:
   ```
   GMAIL_USER=roshan00179@gmail.com
   GMAIL_PASSWORD=xxxx xxxx xxxx xxxx
   ```

### Important Notes:

- ⚠️ **NEVER commit `.env.local`** to Git (it's already in `.gitignore`)
- The password is the 16-character App Password, NOT your regular Gmail password
- For production, set these environment variables in your hosting platform (GitHub, Vercel, etc.)

### How the Contact Form Works:

1. User fills out the contact form on the website
2. Form data is sent to `/api/contact` endpoint
3. Backend sends an email to `roshan00179@gmail.com` with the message
4. The email includes:
   - Visitor's name
   - Visitor's email (for replies)
   - The message content
   - Auto-reply-to configured for easy responses

### Testing Locally:

1. Fill in your `.env.local` file with the Gmail App Password
2. Run `npm run dev` to start the development server
3. Try submitting the contact form
4. Check your Gmail inbox for the message

### Troubleshooting:

- **"Failed to send message"**: Check that your App Password is correct in `.env.local`
- **No email received**: Verify the email address is correct in `.env.local`
- **Gmail blocks the connection**: Make sure you're using an App Password, not your regular password

---

For more info on Gmail App Passwords: https://support.google.com/accounts/answer/185833
