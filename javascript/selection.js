// Get all elements inside the container
var container = document.getElementById("sidebar");
var elements = container.getElementsByClassName("list-group-item");

// Loop through all elements and add the function
for (var i=0;i<elements.length;i++){
  elements[i].addEventListener("click", function() {
    // Remove the current active class
    var current = document.querySelector(".active");
    current.className = current.className.replace(" active", "");

    // Add the active class to the current/clicked one
    this.className += " active";
  });
}
