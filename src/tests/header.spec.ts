import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page} ) => {
  await page.goto('http://localhost:3000')
})

test('if you click count button once, the value increase by one', async({ page }) => {
  const titleText = await page.innerText('h1')
  await expect(titleText).toBe('なういBlog')
})

// test('ヘッダーにある「記事一覧」をクリックすると、Googleのホームページに遷移する', async({page}) => {
//   const 
// })