gsap.registerPlugin(ExpoScaleEase)

window.addEventListener('load', init)

function init() {

  const scaleTo = 0.75
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger:'.img-wrap',
      start: 'center center',
      end: '+=100%',
      pin: true,
      scrub: true
    }
  })

  tl
  .to('.overflow-wrap', {
    scale: scaleTo,  
    borderRadius: 20,
    ease: `expoScale(1, ${scaleTo})`
  }, 0)

  .to('.overflow-wrap img', {
    scale: 1/scaleTo,
    ease: `expoScale(1, ${1/scaleTo})`
  }, 0)
  
} 

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.img0',
    scrub: true
  }
})
.to('.img0', {
  stagger: .2,
  y: -700,
  scrub: true
})