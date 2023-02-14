//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
//Complementary DNA
//n DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
//Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. 
//DNA strand is never empty or there is no DNA at all (again, except for Haskell).
//Example: (input --> output)
//"ATTGC" --> "TAACG"
//"GTAT" --> "CATA"

function complementDNAStrand(dna){
    const inputDNA = dna.toUpperCase();
    return inputDNA.split("").map((nucleobase) => {
      switch(nucleobase) {
          case "A" :
            return "T";
          case "T" :
            return "A";
          case "G" :
            return "C";
          case "C" :
            return "G";
          case " ":
            throw "Input Nucleic acid sequence error";
          // case /^ATCG/:
          //   throw "Input Nucleic acid sequence error";  
          default :
            throw "Input Nucleic acid sequence error";  
      }
    }).join("")
  }
  module.exports = complementDNAStrand;
