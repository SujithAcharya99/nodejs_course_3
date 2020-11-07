// const squ = function (x){
//     return x + x
// }

// const squ = (x) =>{
//     return x * x
// }

// const squ = (x) => x * x

// console.log(squ(2))
const event1 = {
    name : 'birthday',
    gustList: ['sujith','sanjay','thanush'],
    printGustList(){
        console.log('guest list for the '+ this.name)

        this.gustList.forEach( (guest) =>{
            console.log(guest + ' is attending ' + this.name)
        })
    }

}

event1.printGustList()