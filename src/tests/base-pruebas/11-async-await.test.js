import '@testing-library/jest-dom';
import { getImagen } from '../../base-pruebas/11-async-await';

describe('Pruebas con Async-Await', () => {
    test('should return an url', async () => {
        await getImagen().then((url) => {
            expect(typeof url).toBe('string');
            expect(url.includes('https://')).toBe(true);
        });
    });
});
