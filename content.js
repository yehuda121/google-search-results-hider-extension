// // Simple logger to verify that the content script is running
// console.log("SRH: content script loaded");

// // This function finds all search result elements and adds a Hide button to each one
// function addHideButtonsToResults() {
//   // Try multiple selectors because Google changes its DOM structure often
//   const results = document.querySelectorAll(
//     "div.g, div[data-sokoban-container], div.MjjYud"
//   );

//   console.log("SRH: found results:", results.length);

//   results.forEach((result) => {
//     // Avoid adding the button more than once to the same result
//     if (result.dataset.srhProcessed === "true") {
//       return;
//     }

//     // Try to find the main title element (usually an <h3> inside the result)
//     const titleElement = result.querySelector("h3");
//     if (!titleElement) {
//       return; // If there is no title, skip this result
//     }

//     // Create a container for the tools (so the button is not inside the link)
//     const toolsContainer = document.createElement("div");
//     toolsContainer.style.marginTop = "4px";

//     // Create the Hide button
//     const hideButton = document.createElement("button");
//     hideButton.textContent = "Hide"; // Capital H, rest lowercase

//     // Simple inline styling so the button looks reasonable
//     hideButton.style.padding = "2px 8px";
//     hideButton.style.fontSize = "12px";
//     hideButton.style.cursor = "pointer";
//     hideButton.style.borderRadius = "4px";
//     hideButton.style.border = "1px solid #ccc";
//     hideButton.style.backgroundColor = "#f0f0f0";

//     // Prevent the click from triggering the search result link
//     hideButton.addEventListener("click", (event) => {
//       event.preventDefault();
//       event.stopPropagation();
//       // Hide the entire result block
//       result.style.display = "none";
//     });

//     // Append the button into the tools container
//     toolsContainer.appendChild(hideButton);

//     // Attach the tools container under the title block,
//     // but outside the <a> link to avoid layout issues and unwanted clicks.
//     // Usually the h3 is inside a link or another container,
//     // so we append the tools container to the result block itself.
//     result.appendChild(toolsContainer);

//     // Mark this result as processed so we don't add another button later
//     result.dataset.srhProcessed = "true";
//   });
// }

// // Run once when the script is injected
// addHideButtonsToResults();

// // Because Google sometimes updates or reloads results dynamically,
// // run this function again every second to catch new results.
// const intervalId = setInterval(addHideButtonsToResults, 1000);




// ---------------------------------------

// Simple logger to verify that the content script is running
console.log("SRH: content script loaded");

// This function finds all search result elements and adds a Hide button to each one
function addHideButtonsToResults() {
  // Try multiple selectors because Google changes its DOM structure often
  const results = document.querySelectorAll(
    "div.g, div[data-sokoban-container], div.MjjYud"  // <= כאן נוסיף עוד classes
  );

  console.log("SRH: found results:", results.length);

  results.forEach((result) => {
    // Avoid adding the button more than once to the same result
    if (result.dataset.srhProcessed === "true") {
      return;
    }

    // Try to find the main title element (usually an <h3> inside the result)
    const titleElement = result.querySelector("h3");
    if (!titleElement) {
      return; // If there is no title, skip this result
    }

    // Create a container for the tools (so the button is not inside the link)
    const toolsContainer = document.createElement("div");
    toolsContainer.style.marginTop = "4px";

    // Create the Hide button
    const hideButton = document.createElement("button");
    hideButton.textContent = "Hide"; // Capital H, rest lowercase

    // Simple inline styling so the button looks reasonable
    hideButton.style.padding = "2px 8px";
    hideButton.style.fontSize = "12px";
    hideButton.style.cursor = "pointer";
    hideButton.style.borderRadius = "4px";
    hideButton.style.border = "1px solid #ccc";
    hideButton.style.backgroundColor = "#f0f0f0";

    // Prevent the click from triggering the search result link
    hideButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      // Hide the entire result block
      result.style.display = "none";
    });

    // Append the button into the tools container
    toolsContainer.appendChild(hideButton);

    // Attach the tools container at the top of the result block,
    // so the Hide button appears before the result content.
    result.insertBefore(toolsContainer, result.firstChild);

    // Mark this result as processed so we don't add another button later
    result.dataset.srhProcessed = "true";
  });
}

// Run once when the script is injected
addHideButtonsToResults();

// Because Google sometimes updates or reloads results dynamically,
// run this function again every second to catch new results.
const intervalId = setInterval(addHideButtonsToResults, 1000);
