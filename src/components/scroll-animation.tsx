import { useEffect } from "react"

export default function ScrollAnimation() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.scrollElement', {
      y: '200px',
      duration: 1,
      ease: 'power1.in',
      scrollTrigger: {
        trigger: '.scrollElement',
        start: '20px 50%',
        end: '+=3000',
        toggleActions: 'restart none none reverse',
        markers: true
      }
    })
    return () => {
      // pin.kill()
    }
  }, [])
}