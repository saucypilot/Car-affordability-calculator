import React from "react";
import Background from "../../components/background.server";
import Calculator from "../../components/calculator.client";

export default function Page() {
  return (
    <html lang="en">
      <body>
        <h1>Car affordability calculator</h1>
        <Background />
        <Calculator />
      </body>
    </html>
  );
}