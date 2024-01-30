$(document).ready(function () {
    var audio = new Audio("img/0130.mp3")
    audio.play()

    $(".yes").mousemove(function () {
        if (screen.width <= 600) {
            var x = Math.random() * 300
            var y = Math.random() * 500
        } else {
            var x = Math.random() * 500
            var y = Math.random() * 500
        }
        var left = x + "px"
        var top = y + "px"
        $(".yes").css("left", left)
        $(".yes").css("top", top)
    })
})
