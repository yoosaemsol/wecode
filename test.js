evenNumber = () => {
  let evenNumber = [];

  for (i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      evenNumber.push(i);
    }
  }
  return evenNumber;
};
