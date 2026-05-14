import { SignJWT, jwtVerify } from "jose";
// might actually NOT need the `cookies` package
import { cookies } from "next/headers";
import { logEvent } from "@/utils/sentry";

const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
// When the cookie gets put into the client's web browser,
// the cookie will be called:
const cookieName = "auth-token";

// Generate, encrypt, and sign token with secret
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

// Decrypt and verify token
/*
The `<T>` is a generic type,
which enables client code to specify the type of the payload
when said code calls the function.
*/
export async function verifyAuthToken<T>(token: string): Promise<T> {
  try {
    const { payload } = await jwtVerify(token, secret);

    return payload as T;
  } catch (error) {
    const msg = "Token decryption failed";
    logEvent(
      msg,
      "auth",
      {
        tokenSnippet: token.slice(0, 10),
      },
      "error",
      error,
    );

    throw new Error(msg);
  }
}

// Set token to cookie
export async function setAuthCookie(token: string) {
  try {
    const cookieStore = await cookies();

    cookieStore.set(cookieName, token, {
      httpOnly: true, // prevents JavaScript from accessing the cookie, making it more secure
      sameSite: "lax", // not strict to our domain, but it can only get set from top-level GET requests from other sites (there's no cross-site POST requests or anything like that)
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
  } catch (error) {
    const msg = "Failed to set cookie";

    logEvent(
      msg,
      "auth",
      {
        token,
      },
      "error",
      error,
    );
  }
}

// Get token from cookie
export async function getAuthCookie() {
  const cookieStore = await cookies();
  const token = cookieStore.get(cookieName);
  return token?.value; // The `?` here means "optional chaining".
}
