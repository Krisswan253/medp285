let quiz = document.getElementById("quiz");
let nextBtn = document.getElementById("nextBtn");
let result = document.getElementById("result");
let planetName = document.getElementById("planetName");
let planetImage = document.getElementById("planetImage");
let planetDesc = document.getElementById("planetDesc");
let retakeBtn = document.getElementById("retakeBtn");
let bgAudio = document.getElementById("bgAudio");

let planetDescriptions = {
  Venus: "You are Venus, planet of love. You thrive in beauty, connection, and the pleasure of life. You love your friends and trying new things.",
  Neptune: "You are Neptune, dreamer of the cosmos. Mysterious, intuitive, and creative, you often escape into your rich inner world.",
  Earth: "You are Earth, grounded and giving. You care deeply for others, and strive to keep things in balance.",
  Jupiter: "You are Jupiter, the optimistic explorer. Bold, lucky, and full of big ideas—you believe in growth and abundance.",
  Mars: "You are Mars, fierce and passionate. Driven by action and fire, you never back down from a challenge.",
  Mercury: "You are Mercury, quick-witted and curious. Your mind races with ideas, and you're always seeking new information.",
  Sun: "You are the Sun, radiant and bold. You're the center of attention, a natural leader full of energy and warmth.",
  Uranus: "You are Uranus, the revolutionary. You value freedom, innovation, and doing things your own way.",
  Saturn: "You are Saturn, disciplined and wise. You're a loyal realist who values structure, order, and long-term goals.",
  Pluto: "You are Pluto, deep and transformative. You embrace mystery, power, and change—even when it's uncomfortable."
};

let questions = [
  {
    q: "How do you usually make decisions?",
    choices: ["With my heart", "With logic", "With intuition", "With strategy", "I just wing it"],
    values: ["Venus", "Mercury", "Neptune", "Saturn"]
  },
  {
    q: "Which word describes you best?",
    choices: ["Adventurous", "Mysterious", "Loyal", "Bold", "Creative"],
    values: ["Jupiter", "Pluto", "Earth", "Mars", "Venus"]
  },
  {
    q: "In a group project, you are the one who...",
    choices: ["Leads the way", "Breaks the mold", "Keeps order", "Builds harmony", "Lets other people do the work"],
    values: ["Sun", "Uranus", "Saturn", "Venus", "Mars"]
  },
  {
    q: "How do you handle conflict?",
    choices: ["Charge through it", "Avoid and retreat", "Talk it out", "Transform it","Takes some time to think before talking"],
    values: ["Mars", "Neptune", "Mercury", "Pluto", "Jupiter"]
  },
  {
    q: "What draws people to you?",
    choices: ["My warmth", "My originality", "My wisdom", "My dreaminess","My humor"],
    values: ["Sun", "Uranus", "Saturn", "Neptune","Uranus"]
  },
  {
    q: "What motivates you the most?",
    choices: ["Love and connection", "Power and growth", "Discovery and freedom", "Mystery and transformation", "My family and Friends"],
    values: ["Venus", "Jupiter", "Uranus", "Pluto","Earth"]
  },
  {
    q: "How do you recharge after a long day at Hunter College?",
    choices: ["Spending time alone and dissocate", "Make some art to unwind!", "Organizing your space. Time to clean!", "Laughing on the phone with friends", "Doomscroll time"],
    values: ["Neptune", "Venus", "Saturn", "Earth", "Mecury"]
  },
];

let currentQuestion = 0;
let scores = {};
function playBackgroundAudio() {
    if (bgAudio.paused) {
      bgAudio.muted = false;
      bgAudio.play();
    }
  }
nextBtn.addEventListener("click", () => {
        bgAudio.muted = false;
        bgAudio.play(); 
      
        if (currentQuestion < questions.length) {
          showQuestion();
        } else {
          showResult();
        }
      });
      

retakeBtn.addEventListener("click", () => {
  scores = {};
  currentQuestion = 0;
  result.classList.add("hidden");
  nextBtn.style.display = "inline-block";
  planetDesc.textContent = "";
  planetName.textContent = "";
  planetImage.src = "";
  planetImage.alt = "";
  showQuestion();
});

function showQuestion() {
  nextBtn.textContent = "Next";
  quiz.innerHTML = `<h2 class="fade-in">${questions[currentQuestion].q}</h2>`;
  for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
    let div = document.createElement("div");
    div.classList.add("choice", "fade-in");
    div.textContent = questions[currentQuestion].choices[i];
    div.addEventListener("click", () => {
      let selected = questions[currentQuestion].values[i];
      scores[selected] = (scores[selected] || 0) + 1;
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        quiz.innerHTML = "";
        nextBtn.style.display = "none";
        showResult();
      }
    });
    quiz.appendChild(div);
  }
}

function showResult() {
  let topPlanet = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  planetName.textContent = topPlanet;
  planetImage.src = `images/${topPlanet.toLowerCase()}2.png`;
  planetImage.alt = topPlanet;
  planetDesc.textContent = planetDescriptions[topPlanet];

  planetName.classList.add("fade-in");
  planetDesc.classList.add("fade-in");

  result.classList.remove("hidden");
}

