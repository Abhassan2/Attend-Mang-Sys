const toMinutes = (timeStr) => {
  const [time, modifier] = timeStr.split(" "); // e.g. "2:10 PM" → ["2:10","PM"]
  let [hours, minutes] = time.split(":").map(Number);

  if (modifier.toUpperCase() === "PM" && hours !== 12) {
    hours += 12;
  }
  if (modifier.toUpperCase() === "AM" && hours === 12) {
    hours = 0;
  }

  return hours * 60 + minutes;
};

export {toMinutes};