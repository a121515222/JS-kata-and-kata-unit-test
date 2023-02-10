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






//   describe('complementDNAStrand', () => {
//     test.each([
//       ['AGCTAGCTAGCT', 'TCGATCGATCGA'],
//       ['AGCTAGCTAGCTAGCTAGCT', 'TCGATCGATCGATCGATCGA']
//     ])('Returns the complement of the input DNA strand: %s', (inputDNA, expectedOutput) => {
//       expect(complementDNAStrand(inputDNA)).toBe(expectedOutput);
//     });
    
//     test('Throws an error when given an empty input', () => {
//       const inputDNA = 'X';
//       const expectedErrorMessage = "Input Nucleic acid sequence error";
//       expect(() => complementDNAStrand(inputDNA)).toThrow(expectedErrorMessage);
//     });
//     test('Throws an error when given an empty input', () => {
//         const inputDNA = ' ';
//         const expectedErrorMessage = "Input Nucleic acid sequence error";
//         expect(() => complementDNAStrand(inputDNA)).toThrow(expectedErrorMessage);
//       });
//     test('Throws an error when given an invalid input', () => {
//       const inputDNA = 'AGCTAGCTAGCX';
//       const expectedErrorMessage = "Input Nucleic acid sequence error";
//       expect(() => complementDNAStrand(inputDNA)).toThrow(expectedErrorMessage);
//     });
//   });
