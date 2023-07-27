function Register(props) {
  return (
    <div>
      <h1>You cannot reserve during these times:</h1>
      {props.reservations.map((reservation) => (
        <p key={reservation.name + reservation.day + reservation.time}>
          {reservation.day}@{reservation.time}
        </p>
      ))}
    </div>
  );
}

export default Register;
