//////nav-bar logo click////
document.querySelector(".nav-logo img").addEventListener("click", e=>{
  window.location.href =  window.location.origin+'/index.html';
})

document.querySelector(".projects-container").addEventListener("click", function() {
  console.log("click");
    window.location.href =  window.location.origin+'/html/project.html';
      });

      const isEmailValid = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    const isPhoneValid= (phone) => {
        const re =/^\+?(6\d{2}|7[1-9]\d{1})\d{6}$/;
        return re.test(phone);
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