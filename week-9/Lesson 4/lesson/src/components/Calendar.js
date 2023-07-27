function Calendar(props) {
  return (
    <div>
      <h1>Calendar</h1>
      {props.reservations.map((reservation) => (
        <p key={reservation.name + reservation.day + reservation.time}>
          {reservation.name} has a reservation on {reservation.day}@
          {reservation.time}
        </p>
      ))}
    </div>
  );
}

export default Calendar;
