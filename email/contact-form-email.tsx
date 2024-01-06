"use server"

import { Resend } from 'resend'

export const sendEmail = async (formData: FormData) => {
  "use server"
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'reetamraj2@gmail.com',
      subject: formData.get('message') as string,
      reply_to: formData.get('email') as string,
      text: "Hello world"
    })

  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        error: error.message
      }
    }
  }

}