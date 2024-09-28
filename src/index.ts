import { Image } from "image-js";

// function to laod the image asynchronously
(async function loadImage() {
  try {
    let img: Image = await Image.load("images/example_input.jpg");
  } catch (e) {
    console.log("error loading the image: ", e);
  }
})();
