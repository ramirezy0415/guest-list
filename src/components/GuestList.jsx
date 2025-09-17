export default function guest({ guestList, setSelectedGuestId }) {
  return (
    <ul>
      {guestList.map((guest) => {
        return (
          <li
            key={guest.id}
            className="list-item"
            onClick={() => {
              setSelectedGuestId(guest.id);
            }}
          >
            <p>{guest.name}</p>
            <p>{guest.email}</p>
            <p>{guest.phone}</p>
          </li>
        );
      })}
    </ul>
  );
}
