function displayPoem(response) {
  console.log("Poem Generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#user-prompt");
  let apiKey = "tfdbcf08d180afdebd50co3aa4ac4389";
  let context =
    "You are a poem expert and love to write short poems. Your mission is to generate a four line poem following the user prompt. Do not use a title. Seperate each line with a <br/>. ";
  let prompt = `User prompt: Generate a short poem about ${promptInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Generating Poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
