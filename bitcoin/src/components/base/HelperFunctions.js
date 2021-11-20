
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

export const getMinIndex = (array) => {
  if (array.length === 0) {
    return -1;
  }

  let min = array[0];
  let minIndex = 0;

  for(let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      minIndex = i;
      min = array[i];
    }
  }
  return minIndex;
}

export const getDateFromMilliseconds = (millisec) => {
  const d = new Date(millisec);
  return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
}

export const getMaxTimesValueHasDecreased = (array) => {
  const timesDecresedInRow = [];
  let times = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      times++;
    } else {
      timesDecresedInRow.push(times);
      times = 0;
    }
  }

  timesDecresedInRow.push(times);
  return Math.max(...timesDecresedInRow);
}

