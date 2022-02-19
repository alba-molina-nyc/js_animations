// takes in 2 params, want to animate to a certain place
// inside curly select y to select down, move down by 20 pixels, then define duration

// fromto takes in three properties
// gsap.fromTo('.text', {opacity: 0, y: 20}, {opacity: 1, y: 0, duration: 1})

// inside timeline define how the animations will behave duration, delays etc.
// const tl = gsap.timeline({defaults: {duration: 0.75}})

gsap.fromTo('.cookie-container', {scale: 0}, {scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5})
gsap.fromTo('.cookie', {opacity: 0, x:-50, rotation: '-45deg'}, {opacity: 1, x:0, rotation: '0deg'})
gsap.fromTo('.text', {x:30, opacity: 0}, {x:0, opacity: 1}, )