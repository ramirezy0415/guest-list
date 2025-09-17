const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/";
const COHORT_CODE = "2506-ftb-ct-web-pt";
const API = BASE_URL + COHORT_CODE;

export async function getGuestList() {
  try {
    const response = await fetch(`${API}/guests`);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Get a single Recipe
export async function getGuestDetails(id) {
  try {
    const response = await fetch(`${API}/guests/${id}`);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching single Guest", error);
    throw error;
  }
}
