import { Image } from "image-js";

// function to laod the image asynchronously
async function loadImage() {
  try {
    let img: Image = await Image.load("images/example_input.jpg");
    console.log("Image width is: ", img.width);
    console.log("Image height is: ", img.height);
  } catch (e) {
    console.log("error loading the image: ", e);
  }
}
console.log("I like how this project just works with typescript out the box!");
loadImage();
