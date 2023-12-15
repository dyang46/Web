// this object is to keep track of narrative beats and unlocks

// each "beat" has a test function, a function which unlocks elements, and a report function

const narrativeManager = class {
  constructor() {
    this.data = {
      timeElapsed : 0,
      possiblePhases : ["phase1", "phase2", "phase3"], // three phases total
      phase : "phase1",
      beats : beats,
      beatsTriggered: [],
      
      pagesVisited: {},
      
      intensity: 0.05,
   
   
      flicker : false,
      flicker2 : false,
      startWordReplacement : false,
   
    }
    for (let x in this.data.beats)
    this.data.beatsTriggered.push(false)
  }

  
  
  
  
  // use this function to set up any variables and timers 
  run(){
    this.setAllElementsToCurrentPhase();
    
    self = this;
    this.mainInterval = setInterval(function(){
      self.loop()
      self.save()
      }, 1000)
    
     
  }

  // goes through all narrative events, checks if they activate, runs activation code, and runs code that delivers a message about the story event
  assess(){
    beats = this.data.beats
    //console.log( this.data.beatsTriggered)
    let beats_triggered = this.data.beatsTriggered;
    for (let b = 0; b < beats.length; b++){
      let beat = beats[b]
      
      if (!beats_triggered[b]){
//console.log(b)
        if (beat.test(this, this.data)){
          beat.triggered = true;
          beats_triggered[b] = true;
          beat.unlock(this, this.data);
          beat.report(this, this.data);
        }
      }
    }
  }
  
  setPhase(phase){
    this.data.phase = phase;
    this.setAllElementsToCurrentPhase()
  }
  
  setPhaseOnElement(htmlElement){   
    for (let p = 0; p <this.data.possiblePhases.length; p++) {
      
      htmlElement.classList.remove(this.data.possiblePhases[p]);
    }
    
    htmlElement.classList.add(this.data.phase)
  }
  
  setAllElementsToCurrentPhase(){
    let pageElements = document.getElementsByTagName("*")
      for (let x = 0; x < pageElements.length; x++){
        if (pageElements[x].parentElement !== null)
        {
          if (pageElements[x].parentElement.tagName == "BODY"){
            this.setPhaseOnElement(pageElements[x])
          }
          this.setPhaseOnElement(document.getElementsByTagName("body")[0])
        }
    }
  }
  
  save(){
    console.log("save_attempted")
    window.localStorage.setItem("hauntedData", JSON.stringify(this.data))
  }
  
  canLoad(){
    return window.localStorage.getItem("hauntedData") !== null
  }
  
  load(){
    this.data = JSON.parse(window.localStorage.getItem("hauntedData"))
    this.setAllElementsToCurrentPhase()
  }
  
  reset(){
    
    this.data = new narrativeManager().data;
  }
  
  loop(){
      this.data.timeElapsed += 1;
      
      
      hauntings.flickerText(this.data.intensity, this.data.flicker)
      hauntings.flickerImage(this.data.intensity, this.data.flicker2)
      
      if (this.data.startWordReplacement)
        hauntings.textReplacement(this.data.intensity, this.data)
        
      this.assess();
      
      
    
  }
  
  

}