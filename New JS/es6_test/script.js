// $(document).ready(function () {
//   $(".intro").css("background-color", "yellow");
//   $("li:even").css("background-color", "red");
//   $("ul").append("<li>Appended Item</li>");
//   $("ul").prepend("<li>Prepended Item</li>");
//   $("ul").before("<h1>Before</h1>");
//   $("ul").after("<h1>After</h1>");
//   $(".removeBtn").click(function () {
//     // $(this.parent).remove();
//     $("p").toggleClass("intro-text");
//   });
// });

// $(document).ready(function () {
//   $("h1").on("click", function () {
//     $(this).css("background-color", "green");
//     // $(this).hide();
//   });
//   $("p").click(function () {
//     $("h1").hide();
//   });

//   // $(this).scroll(function () {
//   //   alert("Scroll event occured");
//   // });

//   $(".removeBtn").click(function () {
//     // $("h1").off("click");
//     $("h1").show();
//   });
// });

// $(document).ready(function () {
//   $(".fi").click(function () {
//     $("h1").fadeIn(1000);
//   });
//   $(".fo").click(function () {
//     $("h1").fadeOut(1000);
//   });
//   $(".ft").click(function () {
//     $("h1").fadeTo(1000, 0.5);

//     //.5 is the opacity. it fades to opacity 0.5
//   });
// });

// $(document).ready(function () {
//   $(".su").click(function () {
//     $("h1").slideUp("fast");
//   });
//   $(".sd").click(function () {
//     $("h1").slideDown("slow");
//   });
//   $(".st").click(function () {
//     $("h1").slideToggle("9000");

//     //.5 is the opacity. it fades to opacity 0.5
//   });
// });
// data = '[{"name" : "Ashwin", "age" : "20"},{"name" : "Abhinandan", "age" : "20"}]';
var mydata = JSON.parse(data);
// console.log(obj);
// alert(mydata[0].name);
console.log(mydata);
