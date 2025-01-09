function toggle(el) {
  el.classList.toggle('active')
  let next = el.nextElementSibling
  // console.log(next.scrollHeight)
  if (next.style.maxHeight) {
    next.style.maxHeight = next.scrollHeight + 'px'
    setTimeout(() => {
      next.style.maxHeight = null
    }, 0)
  } else {
    next.style.maxHeight = next.scrollHeight + 'px'
    setTimeout(() => {
      next.style.maxHeight = 'max-content'
    }, 200)
  }
}