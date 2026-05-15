"use client";

import { useActionState, useEffect } from "react";
import { closeTicket } from "@/actions/ticket.actions";
import { toast } from "sonner";

const CloseTicketButton = (props: { ticketId: number; isClosed: boolean }) => {
  const { ticketId, isClosed } = props;

  const initialState = {
    success: false,
    message: "",
  };
  const [state, formAction] = useActionState(closeTicket, initialState);

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
    } else if (state.message) {
      toast.error(state.message);
    }
  }, [state]);

  if (isClosed) return null;

  return (
    <form action={formAction}>
      <input type="hidden" name="ticketId" value={ticketId} />
      <button
        className="bg-red-500 text-white px-3 py-3 w-full rounded hover:bg-red-600 transition"
        type="submit"
      >
        Close this ticket
      </button>
    </form>
  );
};

export default CloseTicketButton;
