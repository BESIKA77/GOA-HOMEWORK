function greet() {
    const paragraph = document.getElementById("greeting");
    const name = "ბესიკა";
    paragraph.textContent = `welcome ${name}!`;
  }
  
  document.getElementById("greeting").addEventListener("click", greet);
  