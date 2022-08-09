//////nav-bar logo click////
document.querySelector(".nav-logo img").addEventListener("click", e=>{
  window.location.href =  window.location.origin+'/index.html';
})

//////form submit click////
document.querySelector(".contactus-form button").addEventListener("click", e =>{
        console.log("dentrode");
        const inpObj =document.querySelector(".contactus-form");
        inpObj.checkValidity();
        if (inpObj.checkValidity()) { //is the form filled correctly?
        document.querySelector(".ok-message").classList.add("shown-message");
        document.querySelector(".ok-message").classList.remove("hidden-message");
        setTimeout(function() {
          //your code here
         }, 5000);
}});

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



      
      
      

      

