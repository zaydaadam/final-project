export function loadPage(pageName) {
  $.get(`pages/${pageName}.html`, (data) => {
    console.log(`content loaded for ${pageName}`);
    $("#app").html(data);
  }).fail(function () {
    console.error(`Error loading page content for: ${pageName}`);
    $("#app").html("<p>Error loading content. Please try again later.</p>");
  });
}
