// Guides menu: <details> already opens and closes on its own.
// This adds the two things people expect from a menu: Escape and outside-click.
(() => {
  const menu = document.querySelector('.gmenu')
  if (!menu) return
  const summary = menu.querySelector('summary')
  document.addEventListener('click', (e) => {
    if (menu.open && !menu.contains(e.target)) menu.open = false
  })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.open) { menu.open = false; summary.focus() }
  })
  menu.addEventListener('click', (e) => {
    if (e.target.closest('.gpanel a')) menu.open = false
  })
})()
