
document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const dogImageContainer = document.getElementById("dog-image-container");
    
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imageUrl => {
          const img = document.createElement("img");
          img.src = imageUrl;
          dogImageContainer.appendChild(img);
        });
      });
  });
  
  // Challenge 2
  document.addEventListener("DOMContentLoaded", () => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogBreedsList = document.getElementById("dog-breeds");
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        breeds.forEach(breed => {
          const li = document.createElement("li");
          li.textContent = breed;
          dogBreedsList.appendChild(li);
        });
      });
  });
  
  // Challenge 3
  document.addEventListener("DOMContentLoaded", () => {
    const dogBreedsList = document.getElementById("dog-breeds");
  
    dogBreedsList.addEventListener("click", event => {
      if (event.target.tagName === "LI") {
        event.target.style.color = "blue"; // Change font color to blue
      }
    });
  });
  
  // Challenge 4
  document.addEventListener("DOMContentLoaded", () => {
    const breedDropdown = document.getElementById("breed-dropdown");
    const dogBreedsList = document.getElementById("dog-breeds");
  
    breedDropdown.addEventListener("change", event => {
      const selectedLetter = event.target.value;
      const breeds = dogBreedsList.getElementsByTagName("li");
  
      Array.from(breeds).forEach(breed => {
        if (breed.textContent.startsWith(selectedLetter)) {
          breed.style.display = "block"; // Show breed
        } else {
          breed.style.display = "none"; // Hide breed
        }
      });
    });
  });