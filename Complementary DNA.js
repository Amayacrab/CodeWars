//Complementary DNA
//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
//You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. 
//DNA strand is never empty or there is no DNA at all (again, except for Haskell).
//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function DNAStrand(dna){
  // defines dna as an array
arr = dna.split('');
  //make the switch go throgh all the array
  for (var i = 0; arr.length > i ; i++) {
    // change the respective letters 
    switch (arr[i]) {
  
      case 'A' : arr[i] = 'T' 
        break;
  
      case 'T' : arr[i] = 'A'
         break;
  
      case 'G' : arr[i] = 'C'
        break;
  
      case 'C' : arr[i] = 'G'
        break;
  
      default: break;
    }


  }
// return the value as a string and remove the ","
return arr.toString().split(",").join("");
}

//test
console.log(DNAStrand("TAACG"))
console.log(DNAStrand("ATTGC"))
console.log(DNAStrand("GTAT"))
console.log(DNAStrand("CATA"))
console.log(DNAStrand("AAAA"))
/*
Expected

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
dnaStrand []        `shouldBe` []
dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]
*/