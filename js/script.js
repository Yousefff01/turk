const turkButton = document.getElementById("turk");
const kurtButton = document.getElementById("kurt");
let acceptSize = 12;
let rejectSize = 12;
let rejectPadding = [15, 50];

turkButton.addEventListener("click", () => {
  const bodyChildren = document.body.children;

  for (let i = 0; i < bodyChildren.length; i++) {
    const element = bodyChildren[i];
    if (element.id.toLowerCase() !== "turkimg") {
      element.style.display = "none";
    }
    if (element.id.toLowerCase() === "turkimg") {
      element.style.display = "flex";
    }
  }
});
kurtButton.addEventListener("click", () => {
/*   const bodyChildren = document.body.children;

  for (let i = 0; i < bodyChildren.length; i++) {
    const element = bodyChildren[i];
    if (element.id.toLowerCase() !== "kurtimg") {
      element.style.display = "none";
    }

    if (element.id.toLowerCase() === "kurtimg") {
      element.style.display = "flex";
    }
  }
 */});
