import { test, expect } from '@playwright/test';

test('should add a new todo item', async ({ page }) => {

  await page.goto('http://localhost:5173');

  const input = page.locator('input[placeholder="Nourrir le chat"]');
  const addButton = page.locator('text=Add a todo');
  const todoList = page.locator('[data-testid="list"]');

  await input.fill('Nourrir le chat');
  await addButton.click();
  await expect(todoList).toContainText('Nourrir le chat');
});