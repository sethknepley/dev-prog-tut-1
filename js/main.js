class Person {
  name;
  profession;
  sayName() {
    console.log(`My name is ${this.name} and I am a ${this.profession}.`);
  }

  sayTools() {
    if (this.tools === undefined) {
      console.log("I do not use any tools");

      return;
    }

    console.log(`I use ${this.tools.join(', ')}`);
  }
};

class Doctor extends Person {
  profession = 'doctor';
}

class Dev extends Person {
  profession = 'dev';
  tools = ['Sublime Text', 'Command Line'];
}

const seth = new Dev();
let xyz = new Doctor();


seth.name = 'Seth';
xyz.name = 'xyz'

seth.sayName()
seth.sayTools()

xyz.sayName()
xyz.sayTools()




