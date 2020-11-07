const fs = require('fs');

/*const book = {
    tittle : "The Prime Minister",
    author : "xyz"
}

const val = JSON.stringify(book)

fs.writeFileSync('1-json.json',val)*/

//console.log(val)

//const val1 = JSON.parse(val)
//console.log(val1.tittle)

const databuffer = fs.readFileSync('1-json.json')
const data1 = databuffer.toString()
const data2 = JSON.parse(data1);

console.log(data2.author)