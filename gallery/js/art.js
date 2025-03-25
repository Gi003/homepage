//Making of visible divs------------------------------------
// let elements = document.getElementsByClassName("vis");
// console.log(elements);
// console.log(elements[0].style.backgroundColor)

// for (let x of elements){
//     r = Math.random() * 255;
//     g = Math.random() * 255;
//     b = Math.random() * 255;
//     x.style.backgroundColor = `rgb(${r},${g},${b})`;
// }

//Scrollable Gallery---------------------------------------
let array = document.getElementById("array");
let position = 0;

// Start at 0-100 and move negatively
// +------+------------+
// |      |      |      |
// |      |      |      |
// |      |      |      |
// +------+------+------+
// 0      100    200    300
artworks_num = 4
maxarray_pos = -((artworks_num - 1) * 100)

//Key Events
document.addEventListener('keydown',function(event) {
    let key = event.key;
    if (position < 0 && (key=='ArrowLeft' || key=='a')){
        position += 100;
        array.style.transform = `translateX(${position}vw)`;
    }else if (position > maxarray_pos && (key == 'ArrowRight' || key == 'd')){
        console.log(position);
        position -= 100;
        array.style.transform = `translateX(${position}vw)`;
    }
})

//Mouse Events------------------------------------------------------

function toggleFullScreen(element) {

    if (!document.fullscreenElement) {
        // Enter fullscreen mode
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) { /* Safari */
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { /* IE11 */
            element.msRequestFullscreen();
        }
    } else {
        // Exit fullscreen mode
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    }
    }

//Click Event Listener --- class name returns an HTML collection - multiple elements
img_nodelist = document.querySelectorAll(".thumbnail");
left_arrow = document.getElementById("left");
right_arrow = document.getElementById("right");
console.log(img_nodelist);

img_nodelist.forEach((img) => {
    let text = img.parentNode.nextElementSibling;
    let img_container = img.parentNode;
    let marker = img.nextElementSibling;
    let isExpanded = false;

    marker.addEventListener('click', (event) => {
        if(!isExpanded) {
            img_container.style.width = '40%'
            img_container.style.left = '25vw'
            text.style.visibility = 'visible'
            isExpanded = true;
        } else{
            img_container.style.width = '80%'
            img_container.style.left = '50vw'
            text.style.visibility = 'hidden'
            isExpanded = false;
        }
    })

    //The expansion event listener might have to be 
    //larger area than image container
    img.addEventListener('click', (event) => {
        if(!isExpanded) {
            console.log("Child")
            img_container.style.width = '40%'
            img_container.style.left = '25vw'
            text.style.visibility = 'visible'
            isExpanded = true;
        } else{
            console.log('HELLOW WORLD')
            toggleFullScreen(img);
        }
    })

})

left_arrow.addEventListener('click', (event) => {
    console.log("Help");
    position += 100;
    array.style.transform = `translateX(${position}vw)`;
})
right_arrow.addEventListener('click', (event) => {
    console.log("Why");
    position -= 100;
    array.style.transform = `translateX(${position}vw)`;
})