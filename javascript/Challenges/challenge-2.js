function findLargest(a, b, c) {
    // Return the largest among a, b, and c
    if (a>=b && a>=c){
      return a;
    }else if(b>=c && b>=a){
      return b;
    }
    return c

  }

  console.log(findLargest(100, 100, 99)); 