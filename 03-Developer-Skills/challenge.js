const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

const printTemp = function (arr) {
  let string = '';

  for (let i = 0; i < arr.length; i++) {
    string = string + `${arr[i]}℃ in ${i + 1} days ... `;
  }

  console.log(`... ` + string);
};

printTemp(temp2);
