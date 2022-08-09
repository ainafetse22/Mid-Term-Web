//////nav-bar logo click////
document.querySelector(".nav-logo img").addEventListener("click", e=>{
  window.location.href =  window.location.origin+'/index.html';
})

document.querySelector(".projects-container").addEventListener("click", function() {
  console.log("click");
    window.location.href =  window.location.origin+'/html/project.html';
      });
