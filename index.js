function produceDrivingRange(blockRange){
  return function(a, b){
    let s = parseInt(a);
    let e = parseInt(b);
    let distanceToTravel = Math.abs(e - s);
    let difference = blockRange - distanceToTravel;
    if (difference > 0) {
      return `within range by ${difference}`
    }else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percent){
  return function(fare){
    return fare*percent;
  }
}

function createDriver(){
  let driverId =0
  return class driver {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}