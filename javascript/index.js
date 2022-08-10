let translCard=0;
//////nav-bar logo click////
document.querySelector(".nav-logo img").addEventListener("click", e=>{
  window.location.href =  window.location.origin+'/index.html';
});


document.querySelector(".project-card-container").addEventListener("click", function() {
    window.location.href =  window.location.origin+'/html/project.html';
      });

document.querySelector(".prev").addEventListener("click",e=>{
  const card=document.querySelector(".project-card-container");
  const currentsize= document.querySelector(".project-card").offsetWidth;
  const currentposition=document.querySelector(".project-card-container").scrollLeft;
  const maxsize=document.querySelector(".project-card-container").offsetWidth;
  if(currentposition-currentsize<0){
    document.querySelector(".project-card-container").scrollLeft=0
  }
  else{
    document.querySelector(".project-card-container").scrollLeft-=currentsize;
  }
  
  
});

document.querySelector(".next").addEventListener("click",e=>{
  const card=document.querySelector(".project-card-container");
  const currentsize= document.querySelector(".project-card").offsetWidth;
  const currentposition=document.querySelector(".project-card-container").scrollLeft;
  const maxsize=document.querySelector(".project-card-container").offsetWidth;
  if(currentposition+currentsize>maxsize){
    document.querySelector(".project-card-container").scrollLeft=maxsize;
  }
  else{
    document.querySelector(".project-card-container").scrollLeft+=currentsize;
  }
  
  
});

// document.querySelector(".contact-form-email button").addEventListener("click", event=>{
//   const emailparam=document.getElementById("email").value;
//   console.log(document.getElementById("email").value);
//   const inpObj =document.getElementById("email");
//   console.log(inpObj);
//   inpObj.checkValidity();
//   if (inpObj.checkValidity()) 
//       {window.location.href =  window.location.origin+'/html/project.html?email=emailparam'
// }
//       console.log(window.location.href);
// });


