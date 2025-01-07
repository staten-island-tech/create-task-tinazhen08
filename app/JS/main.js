import "../css/style.css";
import {generalKnowledge, books, film, music, musicalsAndTheatres, videoGames, scienceAndNature, computers} from "./trivia"
import { DOMSelector } from "./dom";

const listAPI = [generalKnowledge, books, film, music, musicalsAndTheatres, videoGames, scienceAndNature, computers]

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getCategories(x){
  const c = shuffle(x);
  const C1 = c[0];
  const C2 = c[1];
  const C3 = c[2];
  const C4 = c[3];
  const C5 = c[4];
  const C6 = c[5];
  return {C1, C2, C3, C4, C5, C6}
}

function displayCategories(){
  const categories = getCategories(listAPI);
  for (let i = 0; i < categories.length; i++) {
    DOMSelector.container.insertAdjacentHTML(
      "beforeend", 
      `<div class="${categories[i].results.category}">${categories[i].results.category}</div>`
    )
  }
  return categories
}

function questionDiff(){

}
/* async function getData() {
  try {
    const response = await fetch(
      api
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

getData(); */

/* async function questiion() {
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

async function category(x){
  try{
    const data = await questiion();
    if (!data){
      return null;
    }else{
      if (x.category === "Science & Nature"){
        
      }
    }
  }catch(error){
    alert("No data found")
  }
} */