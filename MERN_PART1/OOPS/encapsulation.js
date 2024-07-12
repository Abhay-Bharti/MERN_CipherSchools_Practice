class person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;


        let NoAccess = function () {
            return `Name is ${firstName} ${lastName}`;
        }

        this.Access = function () {
            return `Name is ${firstName} ${lastName}`;
        }
    }
}

let person1 = new person("Abhay", "Bharti");
console.log(person1.Access());