import { test, expect } from '@playwright/test';
import { testData } from '../config/test-data';

test.describe('Catálogo de libros', () => {
  test('Práctica 4 - Validar la página de libros', async ({ page }) => {
    await test.step('Abrir el catálogo', async () => {
      await page.goto(`${testData.booksBaseUrl}`);

      //await expect(page.getByRole('heading', { name: /book store/i })).toBeVisible();
      await expect(page.getByRole('textbox', { name: /search/i })).toBeVisible();
    });
  });

  test('Práctica 5 - Buscar un libro existente', async ({ page }) => {
    await test.step('Buscar por título', async () => {
      await page.goto(`${testData.booksBaseUrl}`);
      await page.getByRole('textbox', { name: /search/i }).fill(testData.existingBookTitle);

      await expect(
        page.getByRole('link', { name: testData.existingBookTitle, exact: true })
      ).toBeVisible();
    });
  });

  test('Práctica 6 - Buscar un libro inexistente', async ({ page }) => {
    await test.step('Buscar un título sin coincidencias', async () => {
      await page.goto(`${testData.booksBaseUrl}`);
      await page.getByRole('textbox', { name: /search/i }).fill(testData.nonexistentBookTitle);

      await expect(page.locator('div').filter({ hasText: /^PreviousPage 1 of 0Next$/ }).first()).toBeVisible();
      
    });
  });
});
