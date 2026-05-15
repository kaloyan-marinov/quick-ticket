"use server";

/*
This can be thought of as "the backend" for tickets.
*/

import * as Sentry from "@sentry/nextjs";
import { prisma } from "@/db/prisma";
import { revalidatePath } from "next/cache";
import { logEvent } from "@/utils/sentry";
import { getCurrentUser } from "@/lib/current-user";

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
    const user = await getCurrentUser();
    if (!user) {
      logEvent(
        "Unauthorized attempt at creating ticket",
        "ticket",
        {},
        "warning",
      );

      return {
        success: false,
        message: "You must be logged in to create a ticket",
      };
    }

    const subject = formData.get("subject") as string;
    const description = formData.get("description") as string;
    const priority = formData.get("priority") as string;

    if (!subject || !description || !priority) {
      const msg = "All fields are required";
      logEvent(
        msg,
        "ticket",
        {
          subject,
          description,
          priority,
        },
        "warning",
      );

      return {
        success: false,
        message: msg,
      };
    }

    const ticket = await prisma.ticket.create({
      data: {
        subject,
        description,
        priority,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    const msg = "Ticket created successfully";
    logEvent(
      `${msg}: ${ticket.id}`,
      "ticket",
      {
        ticketId: ticket.id,
      },
      "info",
    );

    /*
    revalidatePath("/tickets");
    */

    return {
      success: true,
      message: msg,
    };
  } catch (error) {
    logEvent(
      "An error occurred while creating the ticket",
      "ticket",
      {
        formData: Object.fromEntries(formData.entries()),
      },

      "error",
      error,
    );

    return {
      success: false,
      message: "An error occurred while creating the ticket",
    };
  }
}

export async function getTickets() {
  try {
    const user = await getCurrentUser();
    if (!user) {
      logEvent("Unauthorized access to ticket list", "ticket", {}, "warning");

      return [];
    }

    const tickets = await prisma.ticket.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    logEvent(
      "Fetched ticket list",
      "ticket",
      {
        count: tickets.length,
      },
      "info",
    );

    return tickets;
  } catch (error) {
    logEvent(
      "Error fetching tickets",
      "ticket",
      {}, // = do NOT send any data
      "error",
      error,
    );

    return [];
  }
}

export async function getTicketById(id: string) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      logEvent(
        "Unauthorized attempt at getting a ticket by ID",
        "ticket",
        {},
        "warning",
      );

      return {
        success: false,
        message: "You must be logged in to get a ticket by ID",
      };
    }

    const ticket = await prisma.ticket.findUnique({
      where: {
        id: Number(id),
        userId: user.id,
      },
    });

    if (!ticket) {
      logEvent(
        "Ticket not found",
        "ticket",
        {
          ticketId: id,
        },
        "warning",
      );
    }

    return ticket;
  } catch (error) {
    logEvent(
      "Error fetching ticket details",
      "ticket",
      {
        ticketId: id,
      },
      "error",
      error,
    );

    return null;
  }
}
