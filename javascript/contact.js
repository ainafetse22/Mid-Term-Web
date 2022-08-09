
document.querySelector(".contactus-form button").addEventListener("click", e =>{
        console.log("clicke");
        document.querySelector(".ok-message").classList.add("shown-message");
});

document.querySelector(".overlay").addEventListener("click",e=>{
  console.log("click overlay");
  document.querySelector(".ok-message").classList.add("hidden-message");
  document.querySelector(".ok-message").classList.remove("shown-message");
});

document.querySelector(".ok-message button").addEventListener("click",e=>{
  console.log("click overlay");
  document.querySelector(".ok-message").classList.add("hidden-message");
  document.querySelector(".ok-message").classList.remove("shown-message");

});



//  let progress = $(".progressbar .progress");
//        function counterInit(fValue, lValue) {
//          let counter_value = parseInt($(".counter").text());
//                 counter_value++;
      
//                 if (counter_value >= fValue && counter_value <= lValue) {
//                   $(".counter").text(counter_value + "%");
//                   progress.css({ width: counter_value + "%" });
      
//                   setTimeout(function () {
//                     counterInit(fValue, lValue);
//                   }, 50);
//                 }
//               }
      
//               counterInit(0, 100);



      
      
      

      

