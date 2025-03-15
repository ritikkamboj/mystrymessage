import { Button, Html } from "@react-email/components";
import { Heading } from "@react-email/components";
import * as React from "react";

interface verificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: verificationEmailProps) {
  return (
    <Html>
      <Heading className="text-center">
        Hey User, {username}, Your OTP is {otp}
      </Heading>

      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
    </Html>
  );
}
