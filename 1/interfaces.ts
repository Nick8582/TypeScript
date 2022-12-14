interface Reportable {
  summary(): string;
};

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const cocaCola = {
  color: 'brown',
  corbonated: true,
  sugar: 49,
  summary(): string {
    return `Cola has ${this.sugar} grams of sugar`;
  }
};

const printSummary = (item: Reportable): void => {
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken?: ${vehicle.broken}`);
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(cocaCola); 