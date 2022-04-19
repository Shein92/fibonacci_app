const fibonacci = (num: number): number => {
  let a = 1;
  let b = 0;
  let temp: number;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

export default fibonacci;