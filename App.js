const input = process.argv[2] || ''

const validateSymbols = (string) => {
    const symbolMapping = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    const stringArray = string.split('').filter(char => '()[]{}'.includes(char))
    let symbolStack = [];

    for (let i = 0; i < stringArray.length; i++) {
        const char = stringArray[i];
        if ('([{'.includes(char))
            symbolStack.push(char);
        else if (symbolStack.slice(-1) == symbolMapping[char])
            symbolStack.pop()
        else
            return 'Invalid String'
    }

    return symbolStack.length ? 'Invalid String' : 'Valid String'
}

console.log(validateSymbols(input))
