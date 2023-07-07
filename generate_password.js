// define sample function to randomly return an item in an array
function sample(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}

function generatePassword(options) {
    // define things user might want
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseLetters = lowerCaseLetters.toUpperCase()
    const numbers = '1234567890'
    const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

    // create a collection to store things user picked up
    let collection = []

    if (options.lowercase === 'on') {
        collection = collection.concat(lowerCaseLetters.split(''))
    }
    if (options.uppercase === 'on') {
        collection = collection.concat(upperCaseLetters.split(''))
    }
    if (options.numbers === 'on') {
        collection = collection.concat(numbers.split(''))
    }
    if (options.symbols === 'on') {
        collection = collection.concat(symbols.split(''))
    }

    // remove things that user do not need
    // array-filter, string-includes
    if (options.excludeCharacters) {
        collection = collection.filter((character) => !options.excludeCharacters.includes(character))
        // 又可以更精簡成上面
        // collection = collection.filter((character)=>{
        //     return !options.excludeCharacters.includes(character)
        //     // 可以精簡成上面
        //     // if(options.excludeCharacters.includes(character)){
        //     //     return false
        //     // }
        //     // return true
        // })
    }

    // return error notice if collection is empty
    if (collection.length === 0) {
        return 'There is no valid character in your selection.'
    }

    // start generating password
    let password = ''
    for (let i = 0; i < Number(options.length); i++) {
        password += sample(collection)
    }
    // return password
    return password
}

module.exports = generatePassword