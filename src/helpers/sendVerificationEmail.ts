import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/ApiResponse";
import VerificationEmail from "../../emails/verificationEmail";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Mystry Message | Verification code",
      react: VerificationEmail({ username: username, otp: verifyCode }),
    });
    return {
      success: true,
      message: "Verification email send successfully",
    };
  } catch (emailError) {
    console.error("Error sending verification email...", emailError);
    return { success: false, message: "Failed to send verification email" };
  }
}
