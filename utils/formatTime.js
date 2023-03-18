const formatTime = (hours, minutes, seconds) => {
  let timeString = "";
  if (hours > 0) {
    timeString += `${hours} Hour${hours > 1 ? "s" : ""} `;
  }
  if (minutes > 0) {
    timeString += `${minutes} Min `;
  }
  if (seconds > 0) {
    timeString += `${seconds} Second${seconds > 1 ? "s" : ""}`;
  }
  return timeString.trim();
};
export default formatTime;
