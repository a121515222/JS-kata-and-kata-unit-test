const complementDNAStrand = require('./complementDNAStrand');
describe('input the DNA strand should out complement DNA strand', () => {
    test.each([
        ["A","T"],
        ["T","A"],
        ["G","C"],
        ["C","G"]
    ])("input single Nucleic acid should out the complement Nucleic acid", (nucleobase, expected)=>{
        expect(complementDNAStrand(nucleobase)).toBe(expected);
    });
    
    test.each([
      ["AATTGGCC", "TTAACCGG"],
      ["ATGC", "TACG"],
  ])("Nucleic acid sequence should be marked complement", (nucleobase, expected)=>{
      expect(complementDNAStrand(nucleobase)).toBe(expected);
  });

    test('input lower case nucleic acid sequence should out up case nucleic acid sequence', () => {
      const nucleicAcids = "atgc";
      const expected = "TACG";
    expect(complementDNAStrand(nucleicAcids)).toBe(expected);
  });

    test('input lower and up case mix nucleic acid sequence should out up case nucleic acid sequence', () => {
      const mixNucleicAcids = "atgcATCGAT";
      const expected = "TACGTAGCTA";
    expect(complementDNAStrand(mixNucleicAcids)).toBe(expected);
  });

    test('Empty nucleic acid sequence should has error message', () => {
        const emptyNucleicAcids = " ";
        const expectedErrorMessage = "Input Nucleic acid sequence error";
      expect(()=>complementDNAStrand(emptyNucleicAcids)).toThrow(expectedErrorMessage);
    });
  
    test('Incorrect nucleic acid sequence should has error message', () => {
        const incorrectNucleicAcids = "ATGCX";
        const expectedErrorMessage = "Input Nucleic acid sequence error";
      expect(()=>complementDNAStrand(incorrectNucleicAcids)).toThrow(expectedErrorMessage);
    });
  });
