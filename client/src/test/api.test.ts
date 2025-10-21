// src/__tests__/api.test.ts
import { getUserData } from "../api/users";
import { getCountries } from "../api/countries";
import '@testing-library/jest-dom';

describe("Mock APIs", () => {
  test("getUserData retorna datos de usuario válidos", async () => {
    const data = await getUserData();
    expect(data[0]).toHaveProperty("name");
    expect(data[0]).toHaveProperty("address");
    expect(data[0]).toHaveProperty("country");
  });

  test("getCountries retorna lista de países", async () => {
    const data = await getCountries();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
  });
});
