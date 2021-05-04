# P5js Starter Project for ML5

Template for trying out some machine learning with P5js!

This project is designed to make it possible to use P5JS and ML5 with at least a certain amount of autocomplete in visual studio code, right out of the box.

It SHOULD work with no configuration. If something seems wrong with the P5 autocomplete, try `npm upgrade` in the terminal to download the latest version of the P5 type information. If something is wrong with ML5, you may be out of luck; you can find the type definitions in the `types/ml5.d.ts` folder if you want to tweak them, but they are only a rough draft. It should be enough for most purposes.

I have pre-loaded the project with 300 images that are 100x100 pixels each. You can use these to follow along with Daniel Shiffman's video at https://thecodingtrain.com/CodingChallenges/158-shape-classifier.html starting at the second step (training the model), though you'll need to tweak some settings to deal with having 300 images instead of 100, and them being 100x100 instead of 64x64. Or you could just delete the `data` folder and start from scratch!