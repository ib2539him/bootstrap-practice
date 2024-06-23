

let language = {
    name: 'javascript',
    estd: '1995',
    libraries: ['react', 'vue', 'jQuery']

}


let language2 = { ...language }

language.libraries.push('Angular')


// main object
console.log(language)


// copy from language object
console.log(language2)
