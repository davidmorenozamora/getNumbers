
const getNumbers = (numbers = [], number = '', numberOfElements = 0) =>  {

    const getDisplacement = (initialElement, finalElement, numberId, numbers) => {
        let arrayDisplacement = 0;
        for (let i = initialElement; i < finalElement; i++) {
            if(numbers[i] === undefined && numberId < i) {
                arrayDisplacement--;
            } else if (numbers[i] === undefined && numberId > i) {
                arrayDisplacement++;
            }
        }
        return arrayDisplacement;
    }
    
    const getValuesRange = (numberId, numbers, numberOfElements) => {

        // Our initial value is our item to search index minus the total, then we get the starting point
        let initialElement = numberId - Math.floor(numberOfElements / 2);

        // IF the number is pair we want to have one more to the right
        if(numberOfElements % 2 === 0) {
            initialElement++;
        }

        const finalElement = initialElement + numberOfElements;
        const arrayDisplacement = getDisplacement(initialElement, finalElement, numberId, numbers)

        
        return {
            start: initialElement + arrayDisplacement,
            end: finalElement + arrayDisplacement
        }
    }

    const numberId = numbers.indexOf(number);
    const response = [];

    // Validations
    if(numbers.length < numberOfElements) {
        return numbers;
    }

    if(numberId === -1) {
        return [];
    }

    // We get the range of values that we have to iterate
    const range = getValuesRange(numberId, numbers, numberOfElements);

    for (let i = range.start; i < range.end; i++) {
        response.push(numbers[i]);
    }

    return response;

}