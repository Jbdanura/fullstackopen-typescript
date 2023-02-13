const calculateBmi = ( height: number, weight: number)  =>  {
    const bmi = weight / (height * height) * 10000
    switch (true) {
        case bmi < 18.5:
            console.log('Underweight');
            break;
        case bmi >= 18.5 && bmi < 25:
            console.log('Normal weight');
            break;
        case bmi >= 25 && bmi < 30:
            console.log('Overweight');
            break;
        case bmi >= 30:
            console.log('Obese');
            break;
        default:
            console.log('Invalid input');
            break;
    }
}

calculateBmi(Number(process.argv[2]),Number(process.argv[3]))