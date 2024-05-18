import { NextResponse } from "next/server";
import { Resend } from "resend";
import toast from "react-hot-toast";


const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const {name, email, subject, message  } = await req.json();
  console.log(name, email, subject, message );
 
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: fromEmail,
      subject: subject,
      react: (
        <>
          <p>New message submitted:</p>
          <h1>{subject}</h1>
          <p>{message}</p>
          <br/>
          <p>from: {name}</p>
          <p>Contact: {email}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    toast.error("Something went wrong");
    return NextResponse.json({ error });
  }
}
