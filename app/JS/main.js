import "../css/style.css";

async function getData() {
  try {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=50&type=multiple"
    );
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
      return data.results;
    }
  } catch (error) {
    alert("No data found");
  }
}

getData();

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

async function questiion() {
  try {  
    const data = await getData();  
    if (!data) {  
     return null;
    }else{
      const x = data[Math.floor(Math.random() * data.length)]
      const question = x.question;
      console.log("Question:", question); 

      const correctAnswer = x.correct_answer
      const wrongAnswers = x.incorrect_answers
      const choices = shuffle([correctAnswer, ...wrongAnswers]);
      console.log("Choices:", choices); 

      const difficulty = x.difficulty
      const category = x.category 
      return {question, choices, correctAnswer, difficulty, category}
    }
  } catch (error) {
      alert("No data found")
  }
}

async function category(){
  try{
    const data = await questiion();
    if (!data){
      return null;
    }else{
      const x = data.category;
      if (x === "Science & Nature"){
        
      }
    }
  }catch(error){
    alert("No data found")
  }
}