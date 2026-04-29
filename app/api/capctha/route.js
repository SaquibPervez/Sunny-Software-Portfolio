export async function POST(req) {
  const { token } = await req.json();

  const formData = new URLSearchParams();
  formData.append("secret", process.env.TURNSTILE_SECRET_KEY);
  formData.append("response", token);

  const result = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await result.json();
  console.log("Captcha Verification Result:", data);
  return Response.json(data);
}