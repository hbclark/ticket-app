const TicketPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div>
      <h1>Ticket Page {id}</h1>
    </div>
  );
};

export default TicketPage;
