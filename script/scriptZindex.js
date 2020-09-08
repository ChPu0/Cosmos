


// Z-Index

let cards = [];

const perspectiveOrigin = {
  x: parseFloat(
  getComputedStyle(document.documentElement).getPropertyValue(
  "--scenePerspectiveOriginX")),
  y: parseFloat(
  getComputedStyle(document.documentElement).getPropertyValue(
  "--scenePerspectiveOriginY")),
  maxGap: 10 };


document.addEventListener("DOMContentLoaded", function () {
  cards = document.querySelectorAll(".scene3D > div");
  window.addEventListener("scroll", moveCamera);
  window.addEventListener("mousemove", moveCameraAngle);
  setSceneHeight();
});

function moveCameraAngle(event) {
  const xGap =
  (event.clientX - window.innerWidth / 2) * 100 / (
  window.innerWidth / 2) *
  -1;
  const yGap =
  (event.clientY - window.innerHeight / 2) * 100 / (
  window.innerHeight / 2) *
  -1;
  const newPerspectiveOriginX =
  perspectiveOrigin.x + xGap * perspectiveOrigin.maxGap / 100;
  const newPerspectiveOriginY =
  perspectiveOrigin.y + yGap * perspectiveOrigin.maxGap / 100;

  document.documentElement.style.setProperty(
  "--scenePerspectiveOriginX",
  newPerspectiveOriginX);

  document.documentElement.style.setProperty(
  "--scenePerspectiveOriginY",
  newPerspectiveOriginY);

}

function moveCamera() {
  document.documentElement.style.setProperty("--cameraZ", window.pageYOffset);
}

function setSceneHeight() {
  const numberOfItems = cards.length; // Or number of items you have in `.scene3D`
  const itemZ = parseFloat(
  getComputedStyle(document.documentElement).getPropertyValue("--itemZ"));

  const scenePerspective = parseFloat(
  getComputedStyle(document.documentElement).getPropertyValue(
  "--scenePerspective"));


  const cameraSpeed = parseFloat(
  getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed"));


  const height =
  window.innerHeight +
  scenePerspective * cameraSpeed +
  itemZ * cameraSpeed * numberOfItems;

  // Update --viewportHeight value
  document.documentElement.style.setProperty("--viewportHeight", height);
}