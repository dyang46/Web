/*import heads from './popHead.json';
import contents from './popContent.json';*/

// Fetching heads.json
const contents = [
  "20% off Jeff’s picked ham roll",
  "Take care of Jeff’s beloved grandmother.",
  "Pretty glass product yard sale on Monday afternoon.",
  "To explore your creativity.",
  "WEIRD TASTE, GREAT HEALTH",
  "Get 30% off on Jeff's favorite chocolate chip cookies.",
  "Join Jeff on a virtual treasure hunt in our backyard adventure series.",
  "Enjoy exclusive access to Jeff’s secret garden tour video.",
  "Be part of Jeff's explorers club and receive weekly adventure tips.",
  "50% off on all adventure gear today. Gear up like Jeff!",
  "Learn how to make Grandma Harris' famous apple pie.",
  "Grab your gardening toolkit at a special discount and join Jeff in greening the neighborhood.",
  "Sign up for Jeff’s newsletter and get a free guide to local hidden spots.",
  "Plan your next outing with Jeff’s top picks for family-friendly activities.",
  "Participate in our backyard challenge and win exciting prizes.",
  "Join Jeff in making the planet greener. Attend our online workshop this weekend.",
  "Listen to Jeff’s favorite bedtime stories. New audio series released!",
  "Unlock Jeff's creative activity pack for endless fun at home.",
  "Get exclusive discounts on Jeff's top outdoor game picks.",
  "Explore global flavors with Jeff’s interactive cooking class.",
  "Dive into Jeff's world of science with our DIY experiment kits.",
  "Join our online art class and draw your favorite nature scene like Jeff.",
  "Discover Jeff's playlist for gardening and enjoy the rhythm of nature.",
  "Get moving with Jeff’s backyard workout series for kids.",
  "Join our virtual stargazing event and see the universe through Jeff's telescope."
]

const heads = [
  "Hurry!",
  "Please show your support to Emliy Harris.",
  "Discount opportunities!",
  "Come check Lugos",
  "NURI",
  "Special Today Only!",
  "Discover Hidden Gems!",
  "Limited Time Offer!",
  "Join Our Community!",
  "Flash Sale Alert!",
  "Exclusive Recipe Inside!",
  "Be a Garden Hero!",
  "Adventure Awaits!",
  "Family Day Out!",
  "Calling All Explorers!",
  "Eco-Warrior Alert!",
  "Story Time!",
  "Creative Kids Corner",
  "Outdoor Fun!",
  "Culinary Adventure!",
  "Young Scientist Alert!",
  "Artistic Minds!",
  "Music Lovers!",
  "Fitness Fun!",
  "Explore the Stars!"
]

let elapsedTime = 0;
let popupInterval;


document.addEventListener('DOMContentLoaded', function () { 
  const app = document.getElementById('app');
  // Example of creating a new element
  const header = document.createElement('h1');
  header.textContent = 'Welcome to my world!';
  app.appendChild(header);

  const hole = document.createElement('c1');
  hole.textContent = "Contact Me Please";
  hole.id = "contact";
  hole.addEventListener('click', blackHole);
  app.appendChild(hole); 

  const intro = document.createElement('a');
  intro.textContent = 
  "Welcome to My World!\n Hello there, friends! I'm Jeff, and I'm super excited about everything life has to offer! I love my community a whole bunch, and I think it's the coolest place ever. 🌳 Nature is like my playground – I can't get enough of exploring every nook and cranny. There's so much out there to learn and discover, and I wanna see it all! But hey, I'm not just about adventures. I really love helping people too. My family and friends mean the world to me, and I'm always there when they need a hand or a smile. 😊"
  
  intro.addEventListener('mousemove',()=>intro.style.display = 'none');
  app.append(intro);
  
  setInterval(updateElapsedTime, 1000); 
  popupInterval = setInterval(createPopup, 30000); 

  
  

});

document.addEventListener('DOMContentLoaded', function() {
  // Set the time interval for the switch (in milliseconds)
  let switchInterval = 360000; 

  setTimeout(function() {
      // Select the paragraphs
      
      let paragraph2 = document.getElementById('paragraph2');

      // Switch their visibility
      paragraph2.style.display="block";
  }, switchInterval);
});

document.addEventListener('DOMContentLoaded', function() {
  // Set the time interval for the switch (in milliseconds)
  let switchInterval = 5000; // 5 seconds

  setTimeout(function() {
      // Select the paragraphs
      
      let j2 = document.getElementById('aaa');

      // Switch their visibility
      j2.style.display="none";
  }, switchInterval);
});

function Print(){
  console.log(elapsedTime);
}

function blackHole(){
  var x = document.getElementsByTagName("*"); 
  for (i = 0; i < x.length; i++) {
    x[i].style.position = "absolute"; 
    x[i].style.top = "50%"; x[i].style.left = "50%"; 
    x[i].style.transition = "5s"; 
    x[i].style.transform = "translate(-50%, -50%)";}
}


function createPopup() {
  const randomHead = heads[Math.floor(Math.random() * heads.length)];
  const randomContent = contents[Math.floor(Math.random() * contents.length)];
    const popup = document.createElement('div');
    popup.innerHTML = `
        <h3>${randomHead}</h3>
        <p>${randomContent}</p>
        <button onclick="this.parentElement.style.display='none'">Close</button>
    `;
    popup.style.position = 'fixed';
    popup.style.left = `${Math.random() * window.innerWidth}px`;
    popup.style.top = `${Math.random() * window.innerHeight}px`;
    document.body.appendChild(popup);
}
console.log
//setInterval(createPopup, 2000); 



function updateElapsedTime() {
    elapsedTime++;
    adjustPopupFrequency();
}

function adjustPopupFrequency() {
    // Example: Increase frequency every 5 minutes
    if (elapsedTime % 30 === 0) { // 300 seconds = 5 minutes
        clearInterval(popupInterval);
        // Decrease interval time for more frequent pop-ups
        popupInterval = setInterval(createPopup, getNewIntervalTime());
    }
}

function getNewIntervalTime() {    
    const baseInterval = 10000; // 10 seconds
    return Math.max(1000, baseInterval / (1 + elapsedTime / 300));
}




setInterval(updateElapsedTime, 1000); 
popupInterval = setInterval(createPopup, 12000); 

console.log(elapsedTime);




manager = new narrativeManager();


window.addEventListener("load", function() {

  //alert('Page is loaded'
    console.log(manager.canLoad())
  if (manager.canLoad()){
    manager.load()
    console.log("loaded")
  }
  
  manager.data.beats = beats;
  console.log(manager.data)
  manager.data.pagesVisited[document.title] = true;
 
  manager.run();
  
});