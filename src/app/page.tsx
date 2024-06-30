import React from "react";
import Background from "../../components/background";
import Calculator from "../../components/calculator";
import { metadata } from "./layout";

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