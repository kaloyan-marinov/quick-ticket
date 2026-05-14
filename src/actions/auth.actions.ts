"use server";

import { prisma } from "@/db/prisma";
import bcrypt from "bcryptjs";
import { logEvent } from "@/utils/sentry";
import { signAuthToken, setAuthCookie, removeAuthCookie } from "@/lib/auth";

type ResponseResult = {
  success: boolean;
  message: string;
};

// Register new user
export async function registerUser(
  prevState: ResponseResult,
  formData: FormData,
): Promise<ResponseResult> {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!name || !email || !password) {
      logEvent(
        "Validation error: Missing register fields",
        "auth",
        {
          name,
          email,
        },
        "warning",
      );

      return {
        success: false,
        message: "All fields are required",
      };
    }

    // Check if there already exists a user with the provided `email`.
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      const msg = `Registration failed: there already exists a user with the provided ${email}`;

      logEvent(
        msg,
        "auth",
        {
          email,
        },
        "warning",
      );

      return {
        success: false,
        message: msg,
      };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // Sign and set auth token
    // [thus arranging for the newly-created user to be logged in]
    const token = await signAuthToken({
      userId: user.id,
    });
    await setAuthCookie(token);

    const msg = `User registered successfully: ${email}`;

    logEvent(
      msg,
      "auth",
      {
        userId: user.id,
        email,
      },
      "info",
    );

    return {
      success: true,
      message: msg,
    };
  } catch (error) {
    const msg = "Something went wrong, please try again";

    logEvent(
      `Unexpected error during registration = ${msg}`,
      "auth",
      {},
      "error",
      error,
    );

    return {
      success: false,
      message: msg,
    };
  }
}

// Log user out and remove auth cookie
export async function logoutUser(): Promise<ResponseResult> {
  try {
    await removeAuthCookie();

    logEvent("User logged out successfully", "auth", {}, "info");

    return {
      success: true,
      message: "Logout Successful",
    };
  } catch (error) {
    logEvent("Unexpected error during logout", "auth", {}, "error", error);

    return {
      success: false,
      message: "Logout failed. Please try again",
    };
  }
}
