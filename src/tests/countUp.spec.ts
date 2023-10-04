import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page} ) => {
  await page.goto('http://localhost:3000')
})

test('if you click count button once, the value increase by one', async({ page }) => {
  await page.locator('data-testid=count-up-button').click()

  await expect(page.locator('data-testid=count')).toContainText('1')
})