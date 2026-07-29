import path from 'path'
import { fileURLToPath } from 'url'
const { chromium } = await import('file:///Users/flipo/Good%20Soil%20Discipleship%20Companion%20App/node_modules/playwright/index.mjs')
const here = path.dirname(fileURLToPath(import.meta.url))
const browser = await chromium.launch()
for (const [name, vp] of [['desk', {width:1440,height:900}], ['mob', {width:390,height:844}]]) {
  const page = await browser.newPage({ viewport: vp })
  await page.goto('http://localhost:8973/index-new.html')
  await page.waitForTimeout(1200)
  await page.evaluate(() => {
    document.querySelectorAll('.rev').forEach(e => e.classList.add('on'))
    document.querySelectorAll('img[loading=lazy]').forEach(i => { i.loading = 'eager' })
  })
  await page.waitForTimeout(900)
  await page.waitForTimeout(300)
  await page.screenshot({ path: path.join(here, `page-${name}.png`), fullPage: true })
  await page.close()
}
await browser.close()
console.log('shots done')
