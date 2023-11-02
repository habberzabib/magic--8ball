//MAGIC 8 BALL ASSGN

//8 BALL EVENT LISTENER
document.getElementById("img").addEventListener("click", imgClicked);

function imgClicked() {
  let question = document.getElementById("question").value.toLowerCase();
  let randNum = Math.random();

  if (question === "are you telling the truth?") {
    document.getElementById("answers").innerHTML = `
     <h3>Answer: <span class="text">You dare doubt me?</span></h3>`;
  } else if (question === "spamton?") {
    document.getElementById("answers").innerHTML = `
     <h3>Answer: <span class="text">NOW'S YOUR CHANCE TO BE A [[BIGSHOT]] !!</span></h3>`;
  } else if (question === "napoleon bonaparte?" || question === "napoleon?") {
    document.getElementById("answers").innerHTML = `
      <h3>Answer: <span class="text">Il n'y a rien à faire.</span></h3>`;
  } else if (question === "luh calm fit?") {
    document.getElementById("answers").innerHTML = `
      <h3>Answer: <span class="text">2027.</span></h3>`;
  } else if (question === "hank?" || question === "hank green?") {
    document.getElementById("answers").innerHTML = `
      <h3>Answer: <span class="text">HANK.</span></h3>`;
  } else if (question === "vsauce?") {
    document.getElementById("answers").innerHTML = `
      <h3>Answer: <span class="text">Or is it?</span></h3>`;
  } else if (question === "kurzgesagt?") {
    document.getElementById("answers").innerHTML = `
      <h3>Answer: <span class="text">Based birbs.</span></h3>`;
  } else if (
    question === "stupendium?" ||
    question === "the stupendium?" ||
    question === "ajr"
  ) {
    document.getElementById("answers").innerHTML = `
      <h3>Answer: <span class="text">Cultured.</span></h3>`;
  } else if (question === "bo burnham?") {
    document.getElementById("answers").innerHTML = `
      <h3>Answer: <span class="text">wellll, wellll, look who's inside againnnn-</span></h3>`;
  } else if (
    question === "hamilton?" ||
    question === "alexander hamilton?" ||
    question === "lafayette?" ||
    question === "marquis de lafayette" ||
    question === "lin manuel miranda?"
  ) {
    document.getElementById("answers").innerHTML = `
      <h3>Answer: <span class="text">If I can prove that I never-</span></h3>`;
  } else if (question === "") {
    document.getElementById("answers").innerHTML = `
      <h3>Answer: <span class="text">Please enter a question and click on the ball to get an answer.</span></h3>`;
  } else if (randNum < 0.2) {
    document.getElementById("answers").innerHTML = `
      <h3>Answer: <span class="text">Without a Doubt.</span></h3>`;
  } else if (randNum < 0.4) {
    document.getElementById("answers").innerHTML = `
      <h3>Answer: <span class="text">As I see it, yes.</span></h3>`;
  } else if (randNum < 0.6) {
    document.getElementById("answers").innerHTML = `
  <h3>Answer: <span class="text">Concentrate and ask again.</span></h3>`;
  } else if (randNum < 0.8) {
    document.getElementById("answers").innerHTML = `
  <h3>Answer: <span class="text">Don't count on it.</span></h3>`;
  } else {
    document.getElementById("answers").innerHTML = `
  <h3>Answer: <span class="text">Outlook not so good.</span></h3>`;
  }
}
