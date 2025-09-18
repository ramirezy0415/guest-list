import { useEffect, useState } from "react";
import { getGuestList, getGuestDetails } from "./api/guests";
import GuestList from "./components/GuestList";
import GuestDetails from "./components/GuestDetails";

export default function App() {
  const [guestList, setGuestList] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [selectedGuestId, setSelectedGuestId] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getGuestList();
        setGuestList(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadData();
  }, []);

  // fetch single recipe
  useEffect(() => {
    async function loadGuestDetails() {
      try {
        const data = await getGuestDetails(selectedGuestId);
        setSelectedGuest(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadGuestDetails();
  }, [selectedGuestId]);

  return (
    <>
      <header>
        <h1>Guests</h1>
      </header>
      <main>
        {!selectedGuest ? (
          <>
            <h2>Select a guest from the table below for more details</h2>
            <GuestList
              guestList={guestList}
              setSelectedGuestId={setSelectedGuestId}
            />
          </>
        ) : (
          <GuestDetails
            selectedGuest={selectedGuest}
            back={() => {
              setSelectedGuest(null);
              setSelectedGuestId(null);
            }}
          />
        )}
      </main>
    </>
  );
}
