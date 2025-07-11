/* ********************************************************************************************
 *   COPYRIGHT (C) 2025 TASK MAKER
 *   The reproduction, transmission or use of this document/file or its
 *   contents is not permitted without  written authorization.
 *   Offenders will be liable for damages. All rights reserved.
 *---------------------------------------------------------------------------
 *   Purpose:  index.js file
 *   Project:  TASK MAKER dashboard
 *   Tool:	   VS COde
 ******************************************************************************************** */

/**
 *  Toggles the sidebar visibility on hamburger icon click.
 * This event listener targets the element with ID 'hamburger' and listens
 * for a click event. When triggered, it toggles the 'show' class on the sidebar.
 * This is mainly used for responsive design — to open/close the sidebar
 * on smaller screens (like mobile or tablets), where the sidebar is
 * typically hidden by default to save space.
 */
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("show");
});

/**
 *  Updates the date and time dynamically on the UI.
 * This function gets the current date and formats it in a human-readable
 * way using locale settings. It displays the full weekday, day, month, and year.
 * The formatted string is inserted into the element with ID 'date-time'.
 * This enhances the dashboard's UI by always showing the current date,
 * making the experience more contextual and real-time.
 */
function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const dateStr = now.toLocaleDateString("en-IN", options);
  document.getElementById("date-time").textContent = `Today is ${dateStr}`;
}
//  Initial call to display the date immediately on page load.
updateDateTime();

/**
 * 🔁 Keeps the displayed date updated every 60 seconds.
 * Although the date doesn't change every minute, this interval ensures
 * accuracy when the user leaves the tab open for a long time (e.g., at midnight).
 * It re-executes `updateDateTime()` every 60,000 milliseconds (1 minute),
 * keeping the date label current without needing a page refresh.
 */
setInterval(updateDateTime, 60000); // Update every minute
