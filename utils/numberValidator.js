const isPrime = (numbertobechecked) => {
    if (numbertobechecked <= 1) return false;

    for (let i = 2; i <= Math.sqrt(numbertobechecked); i++) {
        if (numbertobechecked % i === 0) 
            return false;
        }
    return true;
}

const isperfect = (num) => {
    let sum = 0;

    for (let n = 0; n < num; n++) {
        if(num % n === 0){
            sum += n;
        }
    }
    return sum === num;
};

const isarmstrong = (numberchecked) => {
    const digits = numberchecked.toString().split('');
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0);
    return sum === numberchecked;
}

const issum = (numbertobechecked) => {
    return numbertobechecked.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);

}

export {isPrime, isperfect, isarmstrong, issum}