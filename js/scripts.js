$(document).ready(function() {


  $("img").click(function(event) {


    console.log(event.target.id);
    // var elephant = $("#elephantPic");
    // var viper = $("#viperPic");
    // var mosquito = $("#mosquitoPic");
    if (event.target.id === "elephantPic") {
    console.log("in first if");
      $("#hidden1").show();
      $("#initially-showing").hide();
      $("#hidden2").hide();
      $("#hidden3").hide();
    } else if (event.target.id === "viperPic") {
      $("#hidden2").show();
      $("#initially-showing").hide();
      $("#hidden1").hide();
      $("#hidden3").hide();

    } else if (event.target.id === "mosquitoPic") {
      $("#hidden3").show();
      $("#initially-showing").hide();
      $("#hidden1").hide();
      $("#hidden2").hide();
    } else {
      alert("Have you clicked an animal?")
  }



  });




  // $("#elephantPic").click(function() {
  //   $("#hidden1").show();
  //   $("#initially-showing").hide();
  //   $("#hidden2").hide();
  //   $("#hidden3").hide();
  // });
  //
  // $("#viperPic").click(function() {
  //   $("#hidden2").show();
  //   $("#initially-showing").hide();
  //   $("#hidden1").hide();
  //   $("#hidden3").hide();
  //
  // });
  //
  // $("#mosquitoPic").click(function() {
  //   $("#hidden3").show();
  //   $("#initially-showing").hide();
  //   $("#hidden1").hide();
  //   $("#hidden2").hide();
  // });

});
