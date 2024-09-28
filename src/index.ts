import { Image, ImageKind } from "image-js";

// function to laod the image asynchronously
(async function loadImage() {
  try {
    let img: Image = await Image.load("images/example_input.jpg");
    console.log("Image width is: ", img.width);
    console.log("Image height is: ", img.height);
    let newImage: Image = img.clone();
    newImage = newImage.crop({
      height: 50,
    });
    // try saving new image into sample output
    await newImage.save("images/sample_output.jpg", { format: "jpg" });
  } catch (e) {
    console.log("error loading the image: ", e);
  }
})();
