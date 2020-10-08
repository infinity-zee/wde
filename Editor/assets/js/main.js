$(document).ready(function() {

    //Adding tabular spaces
    document.getElementById('textbox').addEventListener('keydown', function(e) {
        if (e.key == 'Tab') {
            e.preventDefault();
            var start = this.selectionStart;
            var end = this.selectionEnd;

            // set textarea value to: text before caret + tab + text after caret
            this.value = this.value.substring(0, start) +
            "\t" + this.value.substring(end);

            // put caret at right position again
            this.selectionStart =
            this.selectionEnd = start + 1;
        }
    });


});

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");
editor.setOptions({
    fontSize: "16px"
});
editor.setShowPrintMargin(false);