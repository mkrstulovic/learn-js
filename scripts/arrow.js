const o = {
    msg: 'An object',
    person: {
        firstName: 'Grace',
        lastName: 'Hopper',
        age: 89,
        fullName: function()  { return this.firstName + ' ' + this.lastName }
    }
}

let x = o.person.fullName();
console.log(x);
  
