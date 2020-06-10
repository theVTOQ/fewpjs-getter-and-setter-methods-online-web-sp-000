// Add your Circle class here
class Circle{
  constructor(radius){
    this._radius = radius;
  }

  get radius(){
    return this.radius;
  }
  
  get diameter(){
    return this.radius * 2;
  }

  get circumference(){
    return this.radius * 2 * Math.PI;
  }

  get area(){
    return Math.PI * this.radius ** 2;
  }

  set radius(radius){
    this.radius = radius;
  }

  set diameter(diameter){
    this.radius = diamter / 2;
  }

  set circumference(circumference){
    this.radius = circumference / Math.PI / 2 ;
  }
}
