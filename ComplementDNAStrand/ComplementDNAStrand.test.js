const complementDNAStrand = require('./complementDNAStrand');
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

// const errorMessage = "Input Nucleic acid sequence error"
// test.each([
//     ["01234", errorMessage],
//     ["xyz", errorMessage],
//     ["",errorMessage],
// ])("Nucleic acid sequence is incorrect should throw error message", (nucleobase,expected)=>{
//     expect(complementDNAStrand(nucleobase)).toThrow();
// });