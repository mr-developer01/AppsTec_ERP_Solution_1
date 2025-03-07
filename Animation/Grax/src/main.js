import { gsap } from "gsap";

var tl = gsap.timeline({ delay: 2 });

tl.from(".intro h1", { opacity: 0, y: 50, duration: 1 })
  .fromTo(
    ".intro h3 span",
    { opacity: 0, y: 50 },
    { opacity: 1, duration: 1, y: 0, delay: 0.3, stagger: 0.2 }
  )
  .from(".black", { opacity: 0, y: -100, duration: .5 });
