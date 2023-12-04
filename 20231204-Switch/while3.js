num = 1;

do {
    if(num%3 == 0 && num%5 == 0 ){
        console.log("FizzBuzz")
    }

    if(num%3 == 0 ){
        console.log("Fizz")

    }
    if(num%5 == 0 ){
        console.log("Buzz")

    } else{
        console.log(num)
    }
    num++;
} while (num <=100);