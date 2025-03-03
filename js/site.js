//DOM elements
var smallThumb = document.querySelectorAll('small-thumbnail');
var slide = null;
var slide1 = document.getElementById('slide1');
var slide2 = document.getElementById('slide2');
var slide3 = document.getElementById('slide3');
var slide4 = document.getElementById('slide4');

//image array//
var array = null;
var images1 = [];
var images2 = [];
var images3 = [];
var images4 = [];
var i=0;
var time = 100;
var active = false;

//image list
images1[0] = "img/awaken.png";
images1[1] = "img/cloud.png";
images1[2] = 'img/dilbert.jpg';
images1[3] = 'img/face.jpg';
images1[4] = 'img/swirl.jpg';

//Change Image1
   function changeImg() {

      if(active == true) {
      slide.src = array[i];

      if(i < array.length - 1){
         i++;
         console.log(i);
      } else {
         i = 0;
      }
      setTimeout(changeImg, time);
   }
   }

//slide 1 event listener
//enter function 
function go() {
   array = images1;
      slide = slide1;
      active = true;
      changeImg()
}

// $("#slide1").mouseenter(go());

// $("#slide1").mouseleave(
//    () => {
//       active = false
//    }
//    );

// //slide2 event listeners 

// $("#slide2").mouseenter(go());

// $("#slide2").mouseleave(
//    () => {
//       active = false
//    }
//    );

// //slide3 event listeners 

// $("#slide3").mouseenter(
//    () => { 
//       slide = slide3;
//       active = true;
//       changeImg()
//    }
//    );

// $("#slide3").mouseleave(
//    () => {
//       active = false
//    }
//    );

// //slide4 event listeners 

// $("#slide4").mouseenter(
//    () => { 
//       slide = slide4;
//       active = true;
//       changeImg()
//    }
//    );

// $("#slide4").mouseleave(
//    () => {
//       active = false
//    }
//    );

// //how the fuck am I gonna relearn this 

