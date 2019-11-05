
// moves contents of li element to the textarea
function addtext(totalCalc) {
    document.notes.notesArea.value += totalCalc;
}

/* functions for download buttons */
function downloadTxt() {
    dlTxtButton.href = "data:text/plain;charset=UTF-8,"  + encodeURIComponent(document.notes.notesArea.value);
}
function downloadDocx() {
    dlDocxButton.href = "data:text/richtext;charset=UTF-8,"  + encodeURIComponent(document.notes.notesArea.value);
}

/* Using JSPDF library to be able to make pdf files on the fly*/
function downloadPdf() {
    var doc = new jsPDF('p', 'pt', 'letter');
    doc.fromHTML(document.notes.notesArea.value);
    doc.canvas.height = 72 * 11;
    doc.canvas.width = 72 * 8.5;
    doc.save('notes.pdf');
}