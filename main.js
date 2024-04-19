import './style.css';

let sentences = [
  "Je suppose que tu aimes tes cicatrices parce qu'elles sont restées avec toi plus longtemps que la plupart des gens qui ne sont jamais restés.",
  "Tu veux mourir ? Jette toi au milieu de l'océan et tu verras que tu lutteras pour survivre. Tu ne veux pas mourir, tu veux juste mettre fin à une douleur en toi.",
  "Ce n'est pas la beauté qui fait l'amour, c'est l'amour qui fait la beauté.",
  "Ce n'est pas parce qu'ils sont nombreux à avoir tort, qu'ils ont raison.",
]

function generatedSentences() {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  const randomSentences = sentences[randomIndex];
  document.querySelector("#sentences-text").textContent = randomSentences;
}

document.querySelector("#generated").addEventListener('click', generatedSentences);