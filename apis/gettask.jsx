const API_URL = "http://192.168.43.3:8000/task";

export async function getTasks() {
  const response = await fetch(API_URL);
  return await response.json();
}
