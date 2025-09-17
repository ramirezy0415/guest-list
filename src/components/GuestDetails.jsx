export default function GuestDetails({ selectedGuest, back }) {
  return (
    <article>
      <button onClick={back}>Back</button>
      <h2>Selected Guest</h2>
      <h3>{selectedGuest.name}</h3>
      <p>
        Email:{selectedGuest.name} <br />
        Phone: {selectedGuest.phone} <br />
        Job Title: {selectedGuest.job} <br />
        Bio: {selectedGuest.bio}
      </p>
    </article>
  );
}
