var random_result;
var lost = 0;
var win = 0;
var previous = 0;

var images = [
    'assets/images/bluediamond.jpg',
    'assets/images/green.jpg',
    'assets/images/purple.jpg',
    'assets/images/yellow.jpg'
];


var resetAndStart = function () {

    random_result = Math.floor(Math.random() * 101) + 19;

    $("#result").html('Random Result:' + random_result);

    $(".crystals").empty();

    random_result = Math.floor(Math.random() * 101) + 19;

    $("#result").html('Random Result:' + random_result);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;


        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        var img = $("<img src='" + images[i] + "' width='100'>");
        crystal.append(img);

        $(".crystals").append(crystal);

    }


    $("#previous").html("Total Score: " + previous);

}
resetAndStart();

$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score:" + previous);

    if (previous > random_result) {
        lost--;

        $("#lost").html("You lost: " + lost);

        previous = 0;

        resetAndStart();
    }
    else if (previous === random_result) {
        win++;

        $("#win").html("You win: " + win);

        previous = 0;

        resetAndStart();

    }


});

$(document).on('click', '#resetButton', function () {
lost=0;
win=0;
previous=0;
$("#lost").empty();
$("#previous").empty();
$("#win").empty();


resetAndStart();
});
