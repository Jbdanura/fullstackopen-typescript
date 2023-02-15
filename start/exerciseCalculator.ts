interface exerciseResult {
    days: number,
    trainingDays: number,
    target: number,
    averageTime: number,
    success: boolean,
    rating: number,
    explanation: string
}

export const calculateExercise = (hours: number[], target: number): exerciseResult => {
    const days = hours.length;
    const trainingDays = hours.filter(hour => hour > 0).length;
    const averageTime = hours.reduce((acc,curr)=> acc + curr, 0) / days;
    let rating: number;
    let explanation: string;
    const success = averageTime >= target ? true : false;
    if(averageTime < 1){
        rating = 1;
        explanation = "not enough exercise!";
    } else if (averageTime < 2){
        rating = 2;
        explanation = "good!";
    } else {
        rating = 3;
        explanation = "perfect";
    }
    return{
        days,
        trainingDays,
        target,
        averageTime,
        success,
        rating,
        explanation
    };
};

interface exerciseArgs {
    target: number,
    hours: number[]
}

const parseArgs = (args:string[]):exerciseArgs=> {
    if(args.length < 4) throw new Error("Not enough arguments");
    if(isNaN(Number(args[2]))) throw new Error("Target is not a number");
    const hours = [];
    for(let i = 3; i < args.length; i++){
        if(isNaN(Number(args[i]))) throw new Error("Hours must be numbers");
        hours.push(Number(args[i]));
    }
    return {target:Number(args[2]),hours};
};

try {
    const{target,hours} = parseArgs(process.argv);
    console.log(calculateExercise(hours,target));
} catch (error: unknown) {
    let errorMessage = "Error. ";
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    console.log(errorMessage);
}