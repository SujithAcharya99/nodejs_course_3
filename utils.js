// console.log("hello iam utils :-)")

// let num = 5;

// const sum = function (a,b) {
//     return a + b;
// }

const fs = require('fs')
const vald = require("chalk")
const getNotes = function () {
    return "your name..";
}


const addNote = function (title,body) {
    
    const notes = loadNotes()
   const duplicatenNotes = notes.filter(function (note){
        return note.title=== title
   })

   if (duplicatenNotes.length === 0) {
    notes.push({
        title : title,
        body : body
    })
    //console.log(notes)
    
    saveNotes(notes)
    console.log(vald.green.bold.inverse("New Notes Added"))
   } else {
       console.log(vald.red.bold.inverse("title already taken"))
   }

   
}


const saveNotes = function (notes) {

    const data2 = JSON.stringify(notes)
    fs.writeFileSync('notes.json' , data2)
}


const loadNotes = function () {
    try {
        const buffer = fs.readFileSync('notes.json')
        const data1 = buffer.toString()
        return JSON.parse(data1)
    } catch (e) {
        return []
    }

}
//****************REMOVE NOTE FUNCTION************************* */
const removeNotes = function (title) {
    //console.log(title)
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })
    if (notes.length > notesToKeep.length) {
        console.log(vald.green.bold.inverse("Removed A Notes "))
    } else {
        console.log(vald.red.bold.inverse("No Matching Note Found"))
    }
    saveNotes(notesToKeep)

}

//module.exports = sum;

module.exports = {
    getNotes: getNotes,
    addNote : addNote,
    removeNotes : removeNotes
}
