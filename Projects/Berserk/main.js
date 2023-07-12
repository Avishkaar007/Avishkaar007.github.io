
$.get("nav.html", function (data) {
    $("body").prepend($(data).find(".icon-bar"));
    $("body").append($(data).find(".footer"));

});