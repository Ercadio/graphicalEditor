//  RANGE: Create a range between a and b, using generator function gen
//  EXAMPLE: var myNumbers = [...range(1,5)];             // [1, 2, 3, 4, 5]
//  EXAMPLE: var squares = [...range(1,5, i => i * i)];   // [1, 4, 9, 16, 25]
function* range(a, b, gen = i => i){
  for(let i = a; i <= b; i++)
    yield gen(i);
}




class Color(){
  static COLOR_TYPE = {
    RGB : 0,
    HSL : 1
  }
  constructor(...args, TYPE){
    if (!TYPE in this.COLOR_TYPE){
      throw `Unsupported Color Type: ${TYPE}`
    }
    
  }
  static HSL(h, s, l){
    return
  }
  static RGB(r, g, b){

  }
  toHSL(){

  }
  toRGB(){

  }
}
