const API_URL = "http://192.168.43.3:8000/task/";

export async function createTask() {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: taskName,
      isComplete: false,
    }),
  });

  return await response.json();
}
