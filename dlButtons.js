
// moves contents of li element to the textarea
function addtext(totalCalc) {
    document.notes.notesArea.value += totalCalc;
}

/* functions for download buttons */
function downloadTxt() {
    dlTxtButton.href = "data:text/plain;charset=UTF-8,"  + encodeURIComponent(document.notes.notesArea.value);
}
function downloadDocx() {
    var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
            "xmlns:w='urn:schemas-microsoft-com:office:word' "+
            "xmlns='http://www.w3.org/TR/REC-html40'>"+
            "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
       var footer = "</body></html>";
       var sourceHTML = header+document.getElementById("notesArea").value+footer;
       
       var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
       var fileDownload = document.createElement("a");
       document.body.appendChild(fileDownload);
       fileDownload.href = source;
       fileDownload.download = 'document.doc';
       fileDownload.click();
       document.body.removeChild(fileDownload);
}

/* Using JSPDF library to be able to make pdf files on the fly*/
function downloadPdf() {
    var doc = new jsPDF('p', 'pt', 'letter');
        /* splits up the textarea string into lines so that it can fit on a page (475 currently works best) */
    var splitHTML = doc.splitTextToSize(document.notes.notesArea.value,475);
        /* assigns it to the PDF, 2nd arg is margin width and 3rd is header size */
    doc.text( splitHTML ,60,45);
    doc.canvas.height = 72 * 11;
    doc.canvas.width = 72 * 8.5;
        /* can change what the name of the downloaded file is here.
        optional to add in an option for users to input their own name by adding getElementByID() */
    doc.save('notes.pdf');
}