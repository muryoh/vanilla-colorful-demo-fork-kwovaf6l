import "../src/rgba-color-picker.js";

import { setFaviconColor } from "./favicon.js"; // See http://www.w3.org/TR/AERT#color-contrast

const getBrightness = ({ r, g, b }) => (r * 299 + g * 587 + b * 114) / 1000;

const picker = document.querySelector("rgba-color-picker");

picker.addEventListener("color-changed", (event) => {
  const rgba = event.detail.value;
  const color = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
  document.body.style.backgroundColor = color;
  const contrast = getBrightness(rgba) > 128 || rgba.a < 0.5 ? "#000" : "#fff";
  document.body.style.setProperty("--contrast", contrast);
  setFaviconColor(color)();
});

picker.color = { r: 30, g: 136, b: 229, a: 1 };
