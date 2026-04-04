// randomGenerateColor
export const  randomGenerateColor = (length) => {
  const colors = [];

  for (let i = 0; i < length; i++) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const color = `#${r.toString(16).padStart(2, '0')}${g
      .toString(16)
      .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

    colors.push(color);
  }

  return colors;
}

// calculateAttendancePercent
export const calculateAttendancePercent = (totalClasses, totalAttendedClasses) => {
  if (totalClasses === 0) {
    return 0; 
  }
  
  return  Math.round((totalAttendedClasses / totalClasses) * 100);
}

