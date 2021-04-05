const changeEven = (numbers, value) => {
    // Пиши код ниже этой строки
    const NewNumbers = [];
    numbers.forEach(number => {
        if (number % 2 === 0) {
            NewNumbers.push(number + value);
        } else {
            NewNumbers.push(number);
      }
    });

    return NewNumbers;
    // Пиши код выше этой строки
};

console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
console.log(changeEven([17, 24, 68, 31, 42], 100));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));