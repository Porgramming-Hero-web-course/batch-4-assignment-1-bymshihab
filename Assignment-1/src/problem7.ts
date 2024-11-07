{
  class Car {
    name: string;
    model: string;
    year: number;

    constructor(name: string, model: string, year: number) {
      this.name = name;
      this.model = model;
      this.year = year;
    }

    getCarAge(): number {
      return (this.year = 2024 - this.year);
    }
  }

  const car = new Car("Honda", "Civic", 2018);
  console.log(car.getCarAge());
}
