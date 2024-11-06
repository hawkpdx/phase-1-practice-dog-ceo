fetch("https://dog.ceo/api/breeds/image/random/4")
  .then((response) => response.json())
  .then((data) => {
    const dogImageContainer = document.getElementById("dog-image-container");
    data.message.forEach((dog) => {
      const dogImage = document.getElementById("dog-image-container");
      dogImage.src = dog;
      dogImageContainer.appendChild(dogImage);
    });
  });
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((data) => {
    const dogBreeds = document.getElementById("select-breed");
    const dogBreedContainer = document.getElementById("dog-breeds");

    for (let breed in dogBreeds) {
      const listItem = document.createElement("li");
      listItem.textContent = breed;
      dogBreedContainer.appendChild(listItem);
    }
  });
const breedUrl = "https://dog.ceo/api/breeds/list/all";
