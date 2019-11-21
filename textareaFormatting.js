function textareaEditor(){
    // create Editor from textarea HTML element with default set of tools
    $(document.getElementById("notesArea")).kendoEditor({ resizable: {
        content: true,
        toolbar: false
    }});
};