$(document).ready(() => {
  const url = "https://anapioficeandfire.com/api/books/";

  // jQuery-consistent way to remove padding
  $("#books").css("padding-left", 0);

  const addBookToDOM = (item) => {
    console.log(item.name);

    $("#books").append(
      $("<div>")
        .css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        })
        .append($("<h2>").text(item.name))
        .append($("<p>").text(item.authors.join(", "))) // Assuming there could be multiple authors
        .append($("<p>").text(item.released.substr(0, 4)))
        .append($("<p>").text(item.numberOfPages + " pages")) // Corrected to concatenate the number of pages
    );
  };

  const fetchData = (url) => {
    $.ajax({
      type: "GET",
      url: url,
      success: (data) => {
        data.forEach(addBookToDOM); // Simplified by passing the function directly
      },
      error: (error) => {
        console.error(error);
        $("#books").append(
          $("<div>").text("An error occurred. Please try again.")
        );
      },
      complete: () => {
        $("#loading").remove(); // jQuery to remove the loading element
      },
    });
  };

  fetchData(url);
});
