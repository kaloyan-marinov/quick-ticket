"use server";

/*
This can be thought of as "the backend" for tickets.
*/

import * as Sentry from "@sentry/nextjs";

export async function createTicket(
  prevState: {
    success: boolean;
    message: string;
  },
  formData: FormData,
): Promise<{
  success: boolean;
  message: string;
}> {
  try {
    throw new Error(
      "Simulated error within the «server action» `createTicket` (for testing/learning purposes!)",
    );

    const subject = formData.get("subject") as string;
    const description = formData.get("description") as string;
    const priority = formData.get("priority") as string;

    if (!subject || !description || !priority) {
      const msg = "All fields are required";
      Sentry.captureMessage(`Validation Error: ${msg}`, "warning");

      return {
        success: false,
        message: msg,
      };
    }

    return {
      success: true,
      message: "Ticket created successfully",
    };
  } catch (error) {
    Sentry.captureException(error as Error, {
      extra: {
        formData: Object.fromEntries(formData.entries()),
      },
    });

    return {
      success: false,
      message: "An error occurred while creating the ticket",
    };
  }
}
