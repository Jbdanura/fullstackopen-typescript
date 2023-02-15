export const calculateBmi = ( height: number, weight: number)  =>  {
    const bmi = weight / (height * height) * 10000;
    switch (true) {
        case bmi < 18.5:
            return 'Underweight';
        case bmi >= 18.5 && bmi < 25:
            return 'Normal weight';
        case bmi >= 25 && bmi < 30:
            return 'Overweight';
        case bmi >= 30:
            return 'Obese';
        default:
            return 'Invalid input';
    }
};

calculateBmi(Number(process.argv[2]),Number(process.argv[3]));

