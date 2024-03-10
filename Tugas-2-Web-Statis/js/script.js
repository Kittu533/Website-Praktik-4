
document.addEventListener("DOMContentLoaded", function () {
  var currentPage = window.location.pathname.split("/").pop();
  var navbarLinks = document.querySelectorAll(".item-navbar ul li a");

  navbarLinks.forEach(function (link) {
    var linkURL = link.getAttribute("href");

    if (linkURL === currentPage) {
      link.classList.add("active");
    }
  });
});

// Effect Navbar blank
document.querySelectorAll(".item-navbar ul li a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior

    // Clear the content from the screen
    document.body.innerHTML = "";

    // Navigate to the new page
    setTimeout(() => {
      window.location.href = this.getAttribute("href");
    }, 100);
  });
});
// End Effect

// Effect in My skill
function animateOnScroll() {
  const skillAndProjectItems = document.querySelectorAll(
    ".content-home,.about-content,.skill-detail-item, .project-detail-item,.project"
  );

  skillAndProjectItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const offset = 200;

    if (
      (rect.top >= 0 && rect.top <= window.innerHeight - offset) ||
      (rect.bottom <= window.innerHeight && rect.bottom >= offset)
    ) {
      item.classList.add("animate-left");
    }
  });
}

document.addEventListener("scroll", animateOnScroll);
animateOnScroll();

//   End Effect My Skill

// form format
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); 
      const email = document.getElementById("input-email").querySelector("input").value;
      const subject = document.getElementById("input-subject").querySelector("input").value;
      const message = document.getElementById("input-message").querySelector("input").value;
      
  
      if (!validateEmail(email)) {
        alert("Please enter a valid email address");
        return;
      }
  
      // Example: Check if subject is not empty
      if (subject.trim() === "") {
        alert("Please enter a subject");
        return;
      }
  
      // Example: Check if message is not empty
      if (message.trim() === "") {
        alert("Please enter a message");
        return;
      }
  
      // If all validation passes, you can proceed with form submission or other actions
      // For demonstration purposes, let's log the form data
      console.log("Email:", email);
      console.log("Subject:", subject);
      console.log("Message:", message);
  
      // Reset the form
      form.reset();
    });
  
    // Function to validate email format
    function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  });
  
// Form
