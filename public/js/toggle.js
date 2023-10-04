$(document).ready(function() {
    // Get the current URL path
    var currentPath = window.location.pathname;

    // Remove the active class from all navigation links
    $(".navigation-menu a").removeClass("active");

    // Add the active class to the link that matches the current path
    if (currentPath === "/home") {
        $("#home-link").addClass("active");
    } else if (currentPath === "/about") {
        $("#about-link").addClass("active");
    } else if (currentPath === "/services") {
        $("#services-link").addClass("active");
    } else if (currentPath === "/skills") {
        $("#skills-link").addClass("active");
    } else if (currentPath === "/projects") {
        $("#projects-link").addClass("active");
    } else if (currentPath === "/contactme") {
        $("#contactme-link").addClass("active");
    }
});