function complementDNAStrand(dna){
    const inputDNA = `${dna}`.toUpperCase();
    return inputDNA.split("").map((nucleobase) => {
      if (nucleobase !== "A" && nucleobase !== "T" && nucleobase !== "G" && nucleobase !== "C" && nucleobase === "") {
        throw "Input Nucleic acid sequence error";
      }
      switch(nucleobase) {
          case "A" :
            return "T";
          case "T" :
            return "A";
          case "G" :
            return "C";
          case "C" :
            return "G";
      }
    }).join("")
  }
  module.exports = complementDNAStrand;
  console.log(complementDNAStrand("ATgccqccaaaatatatttttc"))