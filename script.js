$(document).ready(function() {
  function animateDots() {
    setTimeout(function() {
      $('.one').fadeOut(600); 
    }, 1700);

    setTimeout(function() {
      $('.two').fadeOut(650); 
    }, 3900); 

    setTimeout(function() {
      $('.three').fadeOut(650); 
    }, 6100); 

    setTimeout(function() {
      $('.one').fadeIn(650); 
    }, 6525);

    setTimeout(function() {
      $('.two').fadeIn(650); 
    }, 6675); 

    setTimeout(function() {
      $('.three').fadeIn(650); 
        animateDots();
    }, 6825); 


  }

  animateDots();
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  // Check if the click was inside the dropdown button
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  // Update arrow class based on dropdown state
  if (document.getElementById("myDropdown").classList.contains("show")) {
    $('.arrow').removeClass("downs").addClass("ups"); // Add ups class if open
  } else {
    $('.arrow').removeClass("ups").addClass("downs"); // Add downs class if closed
  }
}

// $(document).ready(function() {

//   function myFunction() {
   
//     $("#myDropdown").toggleClass("show");

//     $('.dropbtn .arrow').toggleClass("up downs"); 
//   }

//   $(".dropbtn").click(function() {
//     myFunction();
//   });

 
//   $(document).click(function(event) {

//     if (!$(event.target).closest(".dropbtn, #myDropdown").length) {
    
//       $("#myDropdown").removeClass("show");
//       $('.dropbtn .arrow').removeClass("downs").addClass("up");
//     }
//   });
// });



// var goGame=$(".goGameBut")

// // console.log(goGame)

// var listOfGames = [".CR",".DTI",".EM",".FF",".Fort",".GI",".Gran",".MC",".MK",".ND",".Pig",".Pok",".SS",".MM",".FG",".BW"]

// // `.{$listOfGames[..] `

// goGame.on("click",displayGame)


// function displayGame(){
//   var randomIndex=Math.floor(Math.random()*listOfGames.length);
//   var randomGameImg=listOfGames[randomIndex];
//   console.log(randomGameImg);
// }

// // displayGame();

const appearOptions = {threshold:1};
const faders= document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    } else{
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader =>{
  appearOnScroll.observe(fader);
});
