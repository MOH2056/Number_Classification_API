import { BadRequestError} from "../middleware/errorHandler.js"
import { isarmstrong, isperfect, isPrime, issum, fetchFunFact } from "../utils/numberValidator.js"

const number = async (req, res, next) => {
    try{
        const {number} = req.query
        const numberValue = Number(number);

        if (!number || isNaN(numberValue)) {
            return next(new BadRequestError ('Invalid number input',{error: true, "number": number}))
        }

        const [prime, perfect, armstrong, digitsum, FunFact] = await Promise.all([
            Promise.resolve(isPrime(numberValue)),
            Promise.resolve(isperfect(numberValue)),
            Promise.resolve(isarmstrong(numberValue)),
            Promise.resolve(issum(numberValue)),
            Promise.resolve(fetchFunFact(numberValue)),
            
        ]);

        const properties = [];
        if (armstrong) properties.push("armstrong");
        properties.push(Math.abs(numberValue) % 2 === 1 ? "odd" : "even");

        return res.json({
            number,
            is_prime: prime,
            is_perfect: perfect,
            properties,
            digit_sum: digitsum,
            fun_fact: FunFact
        })

    }catch(error){
        console.error(error.message)
        next(error);
    }
}


export default number