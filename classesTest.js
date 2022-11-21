class People  {
      constructor({name, gender, age}) {
        this.name = name
        this.gender = gender
        this.age = age
      }
    
      leftHand() {
        console.log("Левая рука")
      }
      rightHand() {
        console.log("Правая рука")
      }
      leftLeg() {
        console.log("Левая нога")
      }
      rightLeg() {
        console.log("Правая нога")
      }
} 


class Employee extends People {
    constructor(data) {
    super(data)
    this.post = data.post
    this.wages = data.wages
    }
} 

const employee = new Employee({
    name: "Ben",
    gender: "male",
    age: 20,
    post: "junior",
    wages: "50000 руб."
})

employee.rightHand()
employee.leftHand()
employee.leftLeg()
employee.rightLeg()

console.log(employee)