import { loadPage } from "./model.js";

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  console.log(hashTag + " " + pageID);
  if (pageID === "") {
    pageID = "home";
  }
  loadPage(pageID);
  $("nav").removeClass("nav-black nav-white");

  if (pageID === "home") {
    $("nav").addClass("nav-white");
  } else {
    $("nav").addClass("nav-black");
  }
}

function initListeners() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

$(document).ready(function () {
  initListeners();
});
