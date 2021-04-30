/// <reference path="global.d.ts" />
"use strict";

var framenum = 0;

function setup() {
  createCanvas(64, 64);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);

}

/** This function runs in an infinitely repeating loop */
function draw() {
  background(255);
  //generate and save random circle

  save(`images/circle${nf(frameCount, 4, 0)}.png`)
  background(255);

  // generate a random square

  save(`images/square${nf(frameCount, 4, 0)}.png`)
  background(255);
  // generate a random triangle

  save(`images/triangle${nf(frameCount, 4, 0)}.png`)
  background(255);

}

