export class Customer {
  constructor(public id: number, public name: string, public state: string, public position: number){}

  sayHi(){
    console.log(this.id);
  }
}
