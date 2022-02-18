// takes in 2 params, want to animate to a certain place
// inside curly select y to select down, move down by 20 pixels, then define duration
// gsap.to('.text', {y: 20, opacity: 0, duration: 1})
// console.log('hello bitch')

// fromto takes in three properties
gsap.fromTo('.text', {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 1})