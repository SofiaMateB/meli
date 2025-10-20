export async function mockRequest(endpoint: string) {
  const baseUrl = "http://localhost:3000"; // el mismo server, pero simulando API externa
  const res = await fetch(`${baseUrl}/${endpoint}`);

  if (!res.ok) {
    throw new Error(`Mock API error: ${endpoint} (${res.status})`);
  }

  return await res.json();
}
