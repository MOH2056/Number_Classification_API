import { BadRequestError, InternalServerError } from "../middleware/errorHandler.js"
import { isarmstrong, isperfect, isPrime, issum } from "../utils/numberValidator.js"
import axios from "axios"

const number = async (req, res, next) => {
    try{
        const {number} = req.query
        const numberValue = Number(number);

        if (!number || isNaN(numberValue)) {
            return next(new BadRequestError ('Invalid number input',{error: true, "number": number}))
        }

        const [prime, perfect, armstrong, digitsum] = await Promise.all([
            Promise.resolve(isPrime(numberValue)),
            Promise.resolve(isperfect(numberValue)),
            Promise.resolve(isarmstrong(numberValue)),
            Promise.resolve(issum(numberValue)),
        ]);

        const properties = [];
        if (armstrong) {
            properties.push("armstrong");
        }
        const evenodd = numberValue % 2 === 0 ? "even" : "odd";
        properties.push(evenodd);


        let funFact = '';
        try {
            const response = await axios.get(`http://numbersapi.com/${numberValue}/math?json`);
            funFact = response.data?.text || "No fun fact available."
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