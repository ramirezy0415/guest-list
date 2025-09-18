export default function guest({ guestList, setSelectedGuestId }) {
  return (
    <table>
      <tr>
        <th>Guest Name</th>
        <th>Email</th>
        <th>Phone Number</th>
      </tr>
      {guestList.map((guest) => {
        return (
          <tr
            key={guest.id}
            onClick={() => {
              setSelectedGuestId(guest.id);
            }}
            className="guest"
          >
            <td>{guest.name}</td>
            <td>{guest.email}</td>
            <td>{guest.phone}</td>
          </tr>
        );
      })}
    </table>
  );
}
