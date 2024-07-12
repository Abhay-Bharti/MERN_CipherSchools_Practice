function person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

    this.getName =  function() {
        console.log(`Full Name is ${firstname} ${lastname}`);
    }
}


let person1 = new person("Abhay", "Bharti");
person1.getName();