import { getTicketById } from "@/actions/ticket.actions";
import { notFound } from "next/navigation";

const TicketDetailsPage = async (props: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await props.params;

  const ticket = await getTicketById(id);

  if (!ticket) {
    notFound();
  }

  return (
    <>
      details:
      <ul>
        <li>{ticket.id}</li>
        <li>{ticket.subject}</li>
        <li>{ticket.description}</li>
      </ul>
    </>
  );
};

export default TicketDetailsPage;
