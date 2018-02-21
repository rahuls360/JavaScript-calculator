var operand="";
var operator = "";

$("button").on("click", function(){
  var text = $(this).text();

  if($(this).hasClass("operator")){
    operator = text;
    switch(operator){
      case '+': console.log("Plus"); break;
      case '-': console.log("Minus"); break;
      case '*': console.log("Multiply"); break;
      case '/': console.log("Divide"); break;
    }
    $(".screen").text(text);
  }else{
    operand += text;
    $(".screen").text(operand);
  }
  
});