# Number_Classification_API 🎯🔢

An API that identifies whether a number is prime, perfect, or an Armstrong number, determines if it is even or odd, and calculates the sum of its digits. It also fetches fun facts about the number from the Numbers API.

## API Endpoint
- **Endpoint URL:** http://localhost:3000//api/classify-number?number= 40
- **Method:** GET

### Response Format (200 OK)

```sh
json
{
    "number": 40,
     "is_prime": false,
     "is_perfect": false,
     "properties": ["even"],
     "digit_sum": 4,  // sum of its digits
     "fun_fact": "40 is a repdigit in base 3 (1111) and a Harshad number in base 10." //gotten from the numbers API
}
```

### Response Format (400 Bad Request)

```sh
json
{
    "number": "alphabet",
    "error": true
}
```

### Setup Instructions

1. **Clone the repo:**
```sh

git clone https://github.com/MOH2056/Number_Classification_API.git
```

2. **Install dependencies:**
```sh
npm install express
```

3. **Start the server:**
```sh

node app.js
```

4. **Open http://localhost:3000/api/classify-number?number=40 in a browser or use Postman**
