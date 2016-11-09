$ = function(id) {
    return document.getElementById(id);
};

var show = function(id) {
    $(id).style.display ='block';
};
var hide = function(id) {
    $(id).style.display ='none';
}

var answerOne = document.getElementById("answer-one");
answerOne.addEventListener("click",function(){
    window.alert("Try again");
});

var answerTwo = document.getElementById("answer-two");
answerTwo.addEventListener("click",function(){
    window.alert("Try again");
});
var answerThree = document.getElementById("answer-three");
answerThree.addEventListener("click",function(){
    window.alert("Correct!");
});

// code for section six assessment

//when (choice clicked){
// if (choice === answer){
//      a green correct check mark appear after the choice
// }else{
//      a red mark for mistake appear after the choice
// }
//}


