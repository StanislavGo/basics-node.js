const parseArgs = () => {
    const allArgs = process.argv.slice(2);
    const resultArr = [];
    
    while (allArgs.length > 0) {
        const argName = allArgs.shift().slice(2);
        const argValue = allArgs.shift();

        resultArr.push(`${argName} is ${argValue}`);
    }

    const stringifiedArgs = resultArr.join(", ");
    console.log(stringifiedArgs);
};

parseArgs();