const openToggles = document.querySelectorAll('[aria-controls]')
const closeBtns = document.querySelectorAll('.close-btn')

for (const closeBtn of closeBtns) {
  closeBtn.addEventListener('click', () => {
    closeBtn.parentElement.classList.remove('is-open')

    const nextSiblings = []

    let currentEl = closeBtn.parentElement.parentElement

    while (currentEl = currentEl.nextElementSibling) {
      nextSiblings.push(currentEl)
    }

    for (const x of nextSiblings) {
      for (const y of x.children) {
        y.classList.remove('is-open')
      }
    }
  })
}

for (const openToggle of openToggles) {
  const control = openToggle.getAttribute('aria-controls')
  const elToOpen = document.getElementById(control)

  openToggle.addEventListener('click', () => {
    const siblings = [...elToOpen.parentNode.children].filter(child =>
      child !== elToOpen
    )

    for (const sibling of siblings) {
      sibling.classList.remove('is-open')
    }

    const nextSiblings = []

    let currentEl = openToggle.parentElement.parentElement

    while (currentEl = currentEl.nextElementSibling) {
      nextSiblings.push(currentEl)
    }

    for (const x of nextSiblings) {
      for (const y of x.children) {
        y.classList.remove('is-open')
      }
    }

    if (elToOpen.classList.contains('is-open')) {
      elToOpen.classList.remove('is-open')
    } else {
      elToOpen.classList.add('is-open')
    }
  })
}

const openNavBtn = document.getElementById('open-nav')
const closeNavBtn = document.getElementById('close-nav')
const nav = document.getElementById('nav')
openNavBtn.addEventListener('click', function () {
  if (nav.classList.contains('is-on-canvas')) {
    nav.classList.remove('is-on-canvas')
  } else {
    nav.classList.add('is-on-canvas')
  }
})

closeNavBtn.addEventListener('click', function () {
  nav.classList.remove('is-on-canvas')
})
