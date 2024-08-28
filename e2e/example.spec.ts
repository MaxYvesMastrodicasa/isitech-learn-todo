import { test, expect } from '@playwright/test';

test('should add a new todo item', async ({ page }) => {
  // Navigue vers l'application
  await page.goto('http://localhost:3000'); // Remplacez par l'URL correcte si nécessaire

  // Sélectionne les éléments sur la page
  const input = page.locator('input[placeholder="Nourrir le chat"]');
  const addButton = page.locator('text=Add a todo');
  const todoList = page.locator('[data-testid="list"]');

  // Simule la saisie de texte
  await input.fill('Nourrir le chat');
  
  // Simule le clic sur le bouton
  await addButton.click();

  // Vérifie qu'une nouvelle tâche a été ajoutée
  await expect(todoList).toContainText('Nourrir le chat');
});