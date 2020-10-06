let container = document.getElementById('container');
let color = false;

$(".clear").on("click", clear);
$(".color").on('click',()=>{
  color = !color
  if(color){
    $(".color").text("Black");
  }else{
    $(".color").text("Color");
  }
  });

function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='box'></div>");
        };
    };
    $(".box").width(960/x);
    $(".box").height(960/x);
    $(".box").on('mouseover tap', function() {
      if(color){
        $(this).css("background-color", ("#"+((1<<24)*Math.random()|0).toString(16)));
      }else{
        $(this).css("background-color", 'black');
      }
        });
};

function start(){
  let num = prompt('how many rows and columns');
  createGrid(num);
}
function clear(){
  $(".box").remove()
  start();
}
start();
