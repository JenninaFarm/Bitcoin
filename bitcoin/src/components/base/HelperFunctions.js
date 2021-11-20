
export const getIndexOfMaxInMultiColumnArray = (array, column = 0) => {
  const rows = array.map((row) => row[column]);
  
  if (rows.length === 0) {
    return -1;
  }

  let max = rows[0];
  let maxIndex = 0;

  for (let i = 1; i < rows.length; i++) {
    if (rows[i] > max) {
      maxIndex = i;
      max = rows[i];
    }
  }
  return maxIndex;  
}

export const getDateFromMilliseconds = (millisec) => {
  const d = new Date(millisec);
  return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
}

