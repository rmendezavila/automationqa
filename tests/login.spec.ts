import { test, expect } from '@playwright/test';
import { testData } from '../config/test-data';

test.describe('Inicio de sesión', () => {
  test('Práctica 1 - Validar los elementos de Login', async ({ page }) => {
    await test.step('Abrir la página de Login', async () => {
      await page.goto(`${testData.loginBaseUrl}/login`);

    });
  });

  test('Práctica 2 - Iniciar sesión con el usuario configurado', async ({ page }) => {
   /* test.skip(
      !testData.username || !testData.password,
      'Configura TEST_USERNAME y TEST_PASSWORD en .env'
    );*/

    await test.step('Ingresar credenciales', async () => {
      await page.goto(`${testData.loginBaseUrl}`);
      await expect (page.getByRole('button', { name: 'Login' })).toBeVisible();
      await page.getByRole('button', { name: 'Login' }).click();
      await page.getByRole('textbox', { name: 'Username' }).fill(testData.username);
      await page.getByRole('textbox', { name: 'Password' }).fill(testData.password);
      await page.getByRole('button', { name: 'Login' }).click();

      //await expect(page.getByRole('heading', { name: 'Secure Area' })).toBeVisible();
      await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
      await page.getByRole('button', { name: 'Logout' }).click();
    });
  });

  test('Práctica 3 - Rechazar credenciales incorrectas', async ({ page }) => {
    await test.step('Ingresar credenciales incorrectas', async () => {
      await page.goto(`${testData.loginBaseUrl}`);
      await expect (page.getByRole('button', { name: 'Login' })).toBeVisible();
      await page.getByRole('button', { name: 'Login' }).click();
      await page.getByRole('textbox', { name: 'Username' }).fill('usuario_incorrecto');
      await page.getByRole('textbox', { name: 'Password' }).fill('clave_incorrecta');
      await page.getByRole('button', { name: 'Login' }).click();
      await expect(page.getByText('Invalid username or password!')).toBeVisible();
    });
  });
});
