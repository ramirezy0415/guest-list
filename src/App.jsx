import { useEffect, useState } from "react";
import { getGuestList } from "./api/guests";
import GuestList from "./components/GuestList";

export default function App() {
  const [guestList, setGuestList] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const result = await getGuestList();
        setGuestList(result);
      } catch (error) {
        console.error(error);
      }
    }
    loadData();
  }, []);

  return (
    <>
      <header>
        <h1>Guests</h1>
      </header>
      <main>
        <GuestList guestList={guestList} />
      </main>
    </>
  );
}
