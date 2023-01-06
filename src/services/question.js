const apiUrl = process.env.REACT_APP_API_URL;

export async function GetAllQuestion() {
  try {
    const response = await fetch(`${apiUrl}/question`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function GetAllCategories() {
  try {
    const response = await fetch(`${apiUrl}/category`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
