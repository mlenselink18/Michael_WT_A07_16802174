"use strict";


$(document).ready( () => {


    $("#buttonSubmit").click( evt => {
        console.log("Button Submit Clicked");
        const ul = document.querySelector('ul')
        let selected = [];
        const checked = document.querySelectorAll('input[type="checkbox"]:checked')
        selected = Array.from(checked).map(x => x.value)

        let correct = true;
        let correctCount = 0
        selected.forEach(element => {
            if(element == 1)
            {
                correctCount += 1;
            }
            else
            {
                correct = false;
            }
        });

        let results = '';
        if(correct == true && correctCount == 4)
        {
            results = "All Correct";
        }
        else
        {
            results = "Not All Correct";
        }
        $("#results").text(results);
        evt.preventDefault();
    });

    $("#buttonReset").click( evt => {
        const checked = document.querySelectorAll('input[type="checkbox"]')
        boxes = Array.from(checked).map(x => x.value)
        boxes.forEach(element => {
            element.checked = false;                        
        });
        $("#results").text('');
        evt.preventDefault();
    });

});