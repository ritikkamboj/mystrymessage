import { Button, Html } from "@react-email/components";
import { Heading } from "@react-email/components";
import * as React from "react";

export default function Email({ username, otp }) {
  return (
    <Html>
      <Heading className="text-center">Ray Tomlinson</Heading>

      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
    </Html>
  );
}
