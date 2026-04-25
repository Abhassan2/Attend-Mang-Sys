// randomGenerateColor
export const randomGenerateColor = (length) => {
  const colors = [];

  for (let i = 0; i < length; i++) {
    const r = Math.floor(Math.random() * 156) + 100;
    const g = Math.floor(Math.random() * 156) + 100;
    const b = Math.floor(Math.random() * 156) + 100;
    const a = (Math.random() * 0.5 + 0.5).toFixed(2);

    const color = `rgba(${r}, ${g}, ${b}, ${a})`;
    colors.push(color);
  }

  return colors;
};


// calculateOverallPercent
export const calculateOverallPercent = (attendance) => {
  if (attendance.length === 0 || !Array.isArray(attendance)) {
    return 0; 
  }

  let overall = 0;
  for(const i of attendance){
    overall += i.percentage;
  }
  
  return  Math.round(overall/attendance.length);
}

