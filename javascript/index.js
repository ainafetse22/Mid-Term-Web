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


const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
const isPhoneValid= (phone) => {
    const re =/^\+?(6\d{2}|7[1-9]\d{1})\d{6}$/;
    return re.test(phone);
};
const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

document.querySelector(".contact-form").addEventListener('submit', (event) => {
    event.preventDefault();
    let emailToCheck=document.querySelector(".contact-form-email input").value;
    let checkEmail = isEmailValid(emailToCheck);
    console.log(`check: ${checkEmail}`);
    if (checkEmail){
        document.querySelector(".subscribed-msg").classList.remove("hidden-message");
        document.querySelector(".subscribed-msg").classList.add("shown-message");
    }
    else{
        document.querySelector(".subscribed-msg").classList.remove("shown-message");
        document.querySelector(".subscribed-msg").classList.add("hidden-message");
    }
})
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


