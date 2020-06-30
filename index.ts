class User {
  public name: string;

  constructor(passedName: string) {
    this.name = passedName
  }

  sayHello() {
    console.log('hi', this.name)
  }
}

const user = new User('Manfred')
console.log(user)
user.sayHello()
