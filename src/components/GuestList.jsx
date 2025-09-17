export default function guest({ guestList }) {
  return (
    <ul>
      {guestList.map((guest) => {
        return (
          <li key={guest.id} className="list-item">
            <p>{guest.name}</p>
            <p>{guest.email}</p>
            <p>{guest.phone}</p>
          </li>
        );
      })}
    </ul>
  );
}
