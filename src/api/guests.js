const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/";
const COHORT_CODE = "2506-FTB-CT-WEB-PT";
const API = BASE_URL + COHORT_CODE + "/guests";

export async function getGuestList() {
  try {
    const response = await fetch(API);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
