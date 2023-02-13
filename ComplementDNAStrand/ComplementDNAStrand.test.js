const complementDNAStrand = require('./complementDNAStrand');
describe('complementDNAStrand', () => {
    test.each([
        ["atgc", "TACG"],
        ["ATGC", "TACG"],
        ["A","T"],
        ["T","A"],
        ["G","C"],
        ["C","G"]
    ])("Nucleic acid sequence should be marked complement", (nucleobase, expected)=>{
        expect(complementDNAStrand(nucleobase)).toBe(expected);
    });
    test('Empty nucleic acid sequence should has error message', () => {
        const emptyNucleicAcids = " ";
        const expectedErrorMessage = "Input Nucleic acid sequence error";
      expect(()=>complementDNAStrand(emptyNucleicAcids)).toThrow(expectedErrorMessage);
    });
  
    test('Incorrect nucleic acid sequence should has error messager', () => {
        const incorrectNucleicAc = "ATGCX";
        const expectedErrorMessage = "Input Nucleic acid sequence error";
      expect(()=>complementDNAStrand(incorrectNucleicAc)).toThrow(expectedErrorMessage);
    });
  });
