import { Image } from "image-js";

// function to laod the image asynchronously
(async function laodImage() {
  try {
    let img = await Image.load("images/example_input.jpg");
    console.log("Image width is: ", img.width);
    console.log("Image height is: ", img.height);
  } catch (e) {
    console.log("error loading the image: ", e);
  }
})();
