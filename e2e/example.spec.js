// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Página inicial', () => {
  test('Deve carregar a página com sucesso', async ({ page }) => {
    await page.goto('http://localhost:3002');
    await expect(page.locator('h1')).toHaveText('Hello, Pipeline!');
  });
});
