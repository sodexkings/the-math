function adduser() {
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
  
      localStorage.setItem("player1_name_", player1_name);
      localStorage.setItem("player2_name", player2_name);
  
      window.location = "game_page.html";
  }

  function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value
    actual_answer = parseInt(number1) * parseInt(number2)
    question_numbers = "<h4>" + number1 + "X"+ number2 +"</h4>";
  input_box = "<br>Answer : <input type='text' id= 'input_check_box'>";
  row = question_numbers + input_box + check_button ;
  document.getElementById("output").innerHTML = row;
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
  }
  
  question_turn = "player1"
  answer_turn = " player2"

  function check()
  {
get_answer = document.getElementById("input_check_box").value;
if(get_answer == actual_answer)
{
  if(answer_turn == "player1")
  {
    update_player1_score = player1_score +1;
    document.getElementById("player1_score").innerHTML = update_player1_score;
  }
  else
  {
    update_player2_score = player2_score +1;
    document.getElementById("player2_score").innerHTML = update_player2_score;

  }
}

  

  if(question_turn == "player2")
  {
    update_player2_score = player2_score +1;
    document.getElementById("player2_score").innerHTML = update_player2_score;

  }
  else
  {
    update_player1_score = player1_score +1;
    document.getElementById("player1_score").innerHTML = update_player1_score;

  }
}


