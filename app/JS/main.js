import "../css/style.css";

async function getData() {
  try {
    //returns a promise
    const response = await fetch(
      "https://opentdb.com/api.php?amount=50&type=multiple"
    );
    //guard clause
    if (response.status != 200) {
      throw new Error(response);
    } else {
      //convert promise to json
      const data = await response.json();
      console.log(data);
      return data.results;
    }
  } catch (error) {
    alert("hey  I could not find that agent");
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
  const data = getData();
}
