import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from "util";
(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;
import 'whatwg-fetch';
beforeAll(() => {
  global.fetch = jest.fn((url) => {
    if (url.includes('meli-users')) {
      return Promise.resolve({
        json: () => Promise.resolve({
          name: 'Sofía Devel',
          address: 'Calle 34A Sur #99A-48, Bogotá',
          country: 'Colombia'
        }),
      }) as any;
    }

    if (url.includes('meli-countries')) {
      return Promise.resolve({
        json: () => Promise.resolve([
          { name: 'Colombia' },
          { name: 'Argentina' },
          { name: 'Brasil' }
        ]),
      }) as any;
    }

    return Promise.reject(new Error('URL no reconocida en el mock'));
  }) as any;
});