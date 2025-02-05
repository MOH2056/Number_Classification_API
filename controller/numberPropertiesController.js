import { BadRequestError, InternalServerError } from "../middleware/errorHandler.js"
import { isarmstrong, isperfect, isPrime, issum } from "../utils/numberValidator.js"
import axios from 'axios'

const number = async (req, res, next) => {
    try{
        const number = req.query.number
        
        const numberValue = Number(number);

        if (!number || isNaN(numberValue)) {
            return next(new BadRequestError ('Invalid number input',{error: true, "number": number || null}))
        }

        const prime = isPrime(number);
        const perfect = isperfect(number)
        const armstrong = isarmstrong(number)
        const digitsum = issum(number)

        const evenodd = number % 2 === 0 ? 'even' : 'odd';

        let properties = [];
        if (armstrong) properties.push('armstrong');
        properties.push(evenodd);

        let funFact = '';
        try {
            const response = await axios.get(`http://numbersapi.com/${numberValue}/math?json`);
            funFact = response.data.text;
            }catch (error) {
                funFact = 'Could not fetch fun fact at this time.';
            }

        return res.json({
            number,
            is_prime: prime,
            is_perfect: perfect,
            properties,
            digit_sum: digitsum,
            fun_Fact: funFact
        })

    }catch(error){
        console.error(error.message)
        next(error);
    }
}

export default number