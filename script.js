var cursor = document.querySelector('.cursor')
var cursor_dot = document.querySelector('.cursor-dot')

document.addEventListener('mousemove',(e)=>{
    cursor.style.left = e.x - 150 + "px";
    cursor.style.top = e.y - 150 + "px";

    cursor_dot.style.left = e.x -10 + "px";
    cursor_dot.style.top = e.y -10 + "px";
})

    var nav_h4 = document.querySelectorAll('.nav h1')
    nav_h4.forEach((e)=>{
        e.addEventListener('mouseenter', ()=>{
            cursor_dot.style.scale = 4
            cursor_dot.style.border = "0.1px solid white"
            cursor_dot.style.backgroundColor = "transparent"
        })
        e.addEventListener('mouseleave', ()=>{
            cursor_dot.style.scale = 1
            cursor_dot.style.border = "0px solid white"
            cursor_dot.style.backgroundColor = "#95C120"
        })
    })

const nav_options = document.querySelector('#nav-options')
const menu_open = document.querySelector('#menu-logo')
const menu_close = document.querySelector('#menu-close')

nav_options.style.maxHeight = '0px';

function toggleMenu(){
    if(nav_options.style.maxHeight == '0px'){
        nav_options.style.maxHeight = '100vh'
        menu_open.style.display = 'none'
        menu_close.style.display = 'block'
    }
    else {
        nav_options.style.maxHeight = '0px'
        menu_close.style.display = 'none'
        menu_open.style.display = 'block' 
    }
}

const buttons = document.querySelectorAll('.buttons');
const foodImage = document.querySelector('#food-image');

// Array of image URLs
const images = [
  'https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-5.jpg?strip=all&lossy=1&sharp=1&ssl=1',
  'https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-menu-e1702553754869.jpg?strip=all&lossy=1&sharp=1&ssl=1',
  'https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-about-1.jpg?strip=all&lossy=1&sharp=1&ssl=1'
];

// Add event listeners to each button
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    console.log(`Button ${index + 1} clicked`);
    foodImage.src = images[index];
  });
});
 

function autoSlideImages() {
    currentIndex = index;
    currentIndex = (currentIndex + 1) % images.length; // Cycle to the next image
    changeImage(currentIndex);
  }
  
  // Start Auto-Slide
  let autoSlide = null;
  function startAutoSlide() {
    autoSlide = setInterval(autoSlideImages, 3000); // Change image every 3 seconds
  }

  startAutoSlide();

gsap.to(".nav",{
    backgroundColor:"#000",
    duration: 0.5,
    height:"110px",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end: "top -11%",
        scrub:1
    }
})

gsap.to(".main",{
    backgroundColor:"#000",
    duration: 0.5,
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        markers:true,
        start:"top -30%",
        end: "top -60%",
        scrub:1
    }
})

gsap.from(".about-us img, .about-us-content",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        start:"top 50%",
        end:"top 58%",
        scrub:3
    }
})

// gsap.from('.page3 .scroller-line',{
//     y:50,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:".page3 .scroller-line",
//         scroller:"body",
//         start:"top 75%",
//         end:"top 70",
//         scrub:2
// })

document.addEventListener("mouseover", (event) => {
    const element = event.target;
    const computedStyle = window.getComputedStyle(element);
  
    if (computedStyle.cursor === "pointer") {
        element.addEventListener('mouseover', ()=>{
            cursor_dot.style.scale = 4
            cursor_dot.style.border = "0.01px solid white"
            cursor_dot.style.backgroundColor = "transparent"
        })
        
        element.addEventListener('mouseleave', ()=>{
            cursor_dot.style.scale = 1
            cursor_dot.style.border = "0px solid white"
            cursor_dot.style.backgroundColor = "#95C120"
        })
    }
  });