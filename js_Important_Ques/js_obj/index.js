// Arrow Function
const PersonArrow = (name) => {
    this.name = name;
};

const alice = new PersonArrow('Alice'); // This will result in a runtime error
