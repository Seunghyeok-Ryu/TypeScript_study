class Person {
  private static CITY = "Seoul";

  public hello() {
    console.log('안녕하세요', Person.CITY);
  }
  
  public change() {
    Person.CITY = "LA";
  }
}

const p1 = new Person();
p1.hello();

const p2 = new Person();
p2.hello();
p1.change();
p2.hello();

class Person2 {
  public static hello2() {
    console.log('안녕하세요')
  }
}
Person2.hello2();