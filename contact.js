document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault(); // prevent actual form submission

      // Get values
      let name = document.getElementById("name").value.trim();
      let mobile = document.getElementById("mobile").value.trim();
      let query = document.getElementById("query").value.trim();

      if (name && mobile && query) {
        document.getElementById("successMsg").style.display = "block";
        // Reset form
        document.getElementById("contactForm").reset();
      }
    });