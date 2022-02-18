abstract class AbstractPerson {
  protected _name: string = "Mark";

  abstract setname(name:string) : void;
}

// new AbstractPerson()

class Person extends AbstractPerson {
  setname(name: string): void {
    this._name = name;
  }
}

const p = new Person();
p.setname;