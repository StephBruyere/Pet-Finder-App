
        $("#submit").on("click", function(event) {
            event.preventDefault();

        var userInput = {
                name: $('#name').val().trim(),
                photo: $('#image').val().trim(),
                answerArray: [
                $('#q1').val().trim(),
                $('#q2').val().trim(),
                $('#q3').val().trim(),
                $('#q4').val().trim(),
                $('#q5').val().trim(),
                $('#q6').val().trim(),
                $('#q7').val().trim(),
                $('#q8').val().trim(),
                $('#q9').val().trim(),
                $('#q10').val().trim()
                ]
            };
$.post("/api/data/friends", userInput)

.done(function(data) {
    $("#petName").html(data.name);
    $("#petImg").attr("<img>", data.photo);
});
});