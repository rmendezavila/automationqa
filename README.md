# Ejercicio Playwright + TypeScript: Login y libros

Incluye pruebas de inicio de sesión y de catálogo de libros. Sigue el estilo de `test`, `expect`, `test.step()` y selectores accesibles como `getByRole()`. Gherkin documenta los casos; no se utiliza Cucumber.

## Instalación
```bash
npm install
npx playwright install chromium
```

## Configurar usuario y contraseña
Copia `.env.example` y renombra la copia a `.env` en la raíz del proyecto. Edita `TEST_USERNAME` y `TEST_PASSWORD` con tu usuario de prueba. No subas `.env` a GitHub.

La prueba de login válido se omite si las credenciales no están configuradas. La URL de login de ejemplo es `the-internet.herokuapp.com`; si tu usuario pertenece a otra aplicación, cambia `LOGIN_BASE_URL` y adapta los localizadores a ese sitio.

## Ejecutar
```bash
npm test
npm run test:login
npm run test:books
npm run test:headed
npm run typecheck
npm run report
```

## Archivos
- `tests/login.spec.ts`: validación de la página, login válido y credenciales incorrectas.
- `tests/books.spec.ts`: validación del catálogo, búsqueda de libro existente e inexistente.
- `features/`: documentación Gherkin.
- `config/test-data.ts`: lee variables del `.env`.
- `.gitignore`: excluye `.env`, dependencias y resultados de ejecución.

## VS Code
Instala **Playwright Test for VS Code** de Microsoft, abre esta carpeta raíz y ejecuta `Test: Refresh Tests` desde `Ctrl+Shift+P`. Las pruebas ejecutables están en `tests/*.spec.ts`.
