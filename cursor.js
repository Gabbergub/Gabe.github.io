document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".custom-cursor");
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
    cursor.style.opacity = 1; // Make visible on screen
  
  
  // Hide cursor when the mouse leaves the viewport
  const hideCursor = () => {
    cursor.classList.add("hidden");
  };
  
  // Show cursor when the mouse re-enters the viewport
  const showCursor = () => {
    cursor.classList.remove("hidden");
  };
  
  // Attach event listeners
  document.addEventListener("mousemove", moveCursor);
  document.addEventListener("mouseout", hideCursor);
  document.addEventListener("mouseover", showCursor);
  
   // Add hover effect for specific elements
    const hoverElements = document.querySelectorAll("a, ul, li");
    hoverElements.forEach((element) => {
      element.addEventListener("mouseover", () => {
        cursor.style.backgroundColor = "rgba(255, 0, 0, 0.8)"; // Change to red
      });
      element.addEventListener("mouseout", () => {
        cursor.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // Revert to default
      });
  });
  });
  