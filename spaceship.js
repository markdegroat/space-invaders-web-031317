class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"

    crew.forEach(function(crewMember){
      crewMember.currentShip = this
    }.bind(this))

    if(crew.length){
      this.docked = false
    }else{
      this.docked = true
    }
    
  }
}
