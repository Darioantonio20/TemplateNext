// tests/example.spec.ts
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const title = await page.textContent('h1');
  expect(title).toBe('Hola Mundo');
});