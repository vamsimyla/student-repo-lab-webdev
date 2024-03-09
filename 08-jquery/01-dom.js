$(document).ready(() => {
  $("#copy").on("click", (event) => {
    console.log("Click event", event);
    $("#output1").text($("#userInput1").val());
  });

  $("#userInput2").on("input", (event) => {
    console.log("Input event", event);
    $("#output2").text($("#userInput2").val());
  });
});
