const API_URL = "http://localhost:4002/api/v1";

export async function GetAllQuestion() {
  try {
    const response = await fetch(`${API_URL}/question`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
