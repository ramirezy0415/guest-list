export default function GuestDetails({ selectedGuest, back }) {
  return (
    <>
      <button onClick={back}>Back</button>
      <article className="card">
        <h2>Selected Guest: {selectedGuest.name}</h2>
        <p>
          <strong>Email:</strong> {selectedGuest.name} <br />
          <strong> Phone:</strong> {selectedGuest.phone} <br />
          <strong>Job Title:</strong> {selectedGuest.job} <br />
          <strong>Bio:</strong> {selectedGuest.bio}
        </p>
      </article>
    </>
  );
}
