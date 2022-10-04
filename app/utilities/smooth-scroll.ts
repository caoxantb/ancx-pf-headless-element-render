/*
 * useful tips: https://1loc.dev/#easing-functions
 * */
const easeOutCubic = t => --t * t * t + 1

export const smoothScroll = (yPosition, duration = 600) => {
  const startY = window.scrollY
  const difference = yPosition - startY
  const startTime = Date.now()

  const step = () => {
    const progress = (Date.now() - startTime) / duration
    const amount = easeOutCubic(progress)
    window.scrollTo({ top: startY + amount * difference })
    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }

  step()
}
