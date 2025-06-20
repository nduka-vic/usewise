// test-local.js
import { handler } from "./netlify/functions/join-waitlist";

const test = async () => {
  const response = await handler({
    body: JSON.stringify({ email: "localtest@example.com" }),
  });

  console.log(response.statusCode, response.body);
};

test();
