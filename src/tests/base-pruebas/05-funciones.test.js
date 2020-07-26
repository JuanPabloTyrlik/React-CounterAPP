import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {
    test('getUser should return an object', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502',
        };
        const user = getUser();
        expect(user).toEqual(userTest);
    });
    test('getUsuarioActivo should return an object', () => {
        const userTest = {
            uid: 'ABC567',
            username: 'JuanPablo',
        };
        expect(getUsuarioActivo('JuanPablo')).toEqual(userTest);
    });
});
