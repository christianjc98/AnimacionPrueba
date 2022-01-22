var animation = anime.timeline({});

animation
.add({
  targets: [".line1", ".line2"],
  left: "0%",
  duration: 700,
  easing:"easeInOutSine"
})

.add({
    targets: ".square-border",
    duration: 300,
    opacity: "1",

    /*begin: function() {
        document.querySelector(".square-border").style.display = "block"
    }, */

    width: "12.5em",
    height: "12.5rem",
    easing:"easeInOutSine"
})

.add({
    targets: ".light-red-square",
    duration: 300,
    opacity: "1",
    width: "12.5rem",
    height: "12.5rem",
    easing:"easeInOutSine"
})

.add({
    targets: ".scene, .cube__face",
    duration: 300,
    opacity: "1",
    width: "6.25rem",
    height: "6.25rem",
    easing:"easeInOutSine"
})

.add({
    targets: ".square-border",
    duration: 500,
    rotateZ: 45,
    easing:"easeInOutSine"
})

.add({
    targets: ".light-red-square",
    duration: 500,
    rotateZ: 45,
    easing:"easeInOutSine"
})

.add({
    targets: ".cube", 
    duration: 500,
   translateZ: "-100px", 
   rotateX: "90deg",
   easing:"easeInOutSine"
})

.add({
    targets: ".cube", 
    duration: 800, 
    rotateY: "90deg",
    rotateX: "0deg",
    translateZ: "-100px",
    easing:"easeInOutSine"
})

.add({
    targets: ".cube", 
    duration: 800, 
    rotateY: "0deg",
    rotateX: "-90deg",
    translateZ: "-100px",
    easing:"easeInOutSine"
})

.add({
    targets: ".line1",
    duration: 500,
    rotateZ: 45,
    easing:"easeInOutSine",
    direction: 'alternate'
})

.add({
    targets: ".line2",
    duration: 500,
    rotateZ: -45,
    easing:"easeInOutSine",
    direction: 'alternate'
}, "-=500")

.add({
    targets: ".line1",
    duration: 500,
    rotateZ: 0,
    easing:"easeInOutSine",
    direction: 'alternate'
})


.add({
    targets: ".line2",
    duration: 500,
    rotateZ: 0,
    easing:"easeInOutSine",
    direction: 'alternate'
}, "-=500")

.add({
    targets: ".circle1",
    duration: 2000,
    height: "180rem",
    width: "180rem",
    easing:"easeInOutSine",
}, 4700)

.add({
    targets: ".circle2",
    duration: 2000,
    height: "180rem",
    width: "180rem",
    easing:"easeInOutSine",
},5200)


.add({
    targets: ".circle3",
    duration: 2000,
    height: "180rem",
    width: "180rem",
    easing:"easeInOutSine",
},5700)

.add({
    targets: [".square-border", ".light-red-square", ".line1", ".line2"],
    duration: 200,
    height: "0",
    width: "0",
    easing:"easeInOutSine",
}, 6000)


.add({
    targets: ".logo",
    duration: 400,
    height: "5rem",
    width: "5rem",
    easing:"easeInOutSine",
}, 6500)





