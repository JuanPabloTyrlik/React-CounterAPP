describe('Demo', () => {
    test('strings should be equal', () => {
        // 1. Arrange (Inicialización)
        const msj = 'Hola Mundo';
        // 2. Act (Accion/Estimulo)
        const msj2 = `Hola Mundo`;
        // 3. Assert (Observar el comportamiento)
        expect(msj).toBe(msj2);
    });
});
