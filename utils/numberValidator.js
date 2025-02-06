import axios  from "axios";

const isPrime = (numbertobechecked) => {
    if (numbertobechecked <= 1) return false;

    for (let i = 2; i <= Math.sqrt(numbertobechecked); i++) {
        if (numbertobechecked % i === 0) 
            return false;
        }
    return true;
}

const isperfect = (num) => {
    if (num < 2) return false;

    let sum = 1;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            let pairDivisor = num / i;
            if (pairDivisor !== i) sum += pairDivisor;
        }
    }
    return sum === num;
};

const isarmstrong = (numberchecked) => {
    const absoluteNumber = Math.abs(numberchecked);
    const digits = absoluteNumber.toString().split('');
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0);
    return sum === absoluteNumber;
};


const issum = (numbertobechecked) => {
    const absoluteNumber = Math.abs(numbertobechecked);
    return absoluteNumber.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
}

const fetchFunFact = async (num) => {
    try {
        const response = await axios.get(`http://numbersapi.com/${num}/math?json`);
        return response.data.text; 
    } catch (error) {
        console.error("Error fetching fun fact:", error);
        return "Could not fetch fun fact at this time.";
    }
};


export {isPrime, isperfect, isarmstrong, issum, fetchFunFact}