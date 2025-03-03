
let elements = document.getElementsByClassName("vis");
console.log(elements);
console.log(elements[0].style.backgroundColor)

for (let x of elements){
    r = Math.random() * 255;
    g = Math.random() * 255;
    b = Math.random() * 255;
    x.style.backgroundColor = `rgb(${r},${g},${b})`;
}
//Getting array 
let array = document.getElementById("array");
let position = 0;
//Scroll Event listenter 

//n-1 * 100vw
artworks_num = 4
maxarray_pos = -((artworks_num - 1) * 100)

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

//Click Event Listener --- class name returns an HTML collection - multiple elements
document.getElementsByClassName("image_container").addEventListener("click, displayDate");