"use server";

/*
This can be thought of as "the backend" for tickets.
*/

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
  const subject = formData.get("subject") as string;
  const description = formData.get("description") as string;
  const priority = formData.get("priority") as string;

  if (!subject || !description || !priority) {
    console.log("All fields are required");

    return {
      success: false,
      message: "All fields are required",
    };
  }

  return {
    success: true,
    message: "Ticket created successfully",
  };
}
