import { SignJWT } from "jose";
import { logEvent } from "@/utils/sentry";

const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
// When the cookie gets put into the client's web browser,
// the cookie will be called:
const cookieName = "auth-token";

export async function signAuthToken(payload: any) {
  try {
    const token = await new SignJWT(payload)
      .setProtectedHeader({
        alg: "HS256",
      })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(secret);

    return token;
  } catch (error) {
    const msg = "Token signing failed";

    logEvent(
      msg,
      "auth",
      {
        payload,
      },
      "error",
      error,
    );

    throw new Error(msg);
  }
}
