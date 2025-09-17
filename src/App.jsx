import { useEffect, useState } from "react";
import { getGuestList, getGuestDetails } from "./api/guests";
import GuestList from "./components/GuestList";
import GuestDetails from "./components/GuestDetails";

export default function App() {
  const [guestList, setGuestList] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [selectedGuestId, setSelectedGuestId] = useState(null);
  const [loader, setLoader] = useState(false);

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
      setLoader(true);
      try {
        const data = await getGuestDetails(selectedGuestId);
        setSelectedGuest(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(false);
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
          <GuestList
            guestList={guestList}
            setSelectedGuestId={setSelectedGuestId}
          />
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
