const Traveller = function(journeys) {
  this.journeys = journeys;
};
// DONE!
Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation
  })
};
// DONE!
Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation
  })
};
// DONE
Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport
  })
};

// Done
Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance
  })
};

// DONE!
Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((totalDistance, journey) => {
    return totalDistance + journey.distance
  }, 0)

};
// Skip
Traveller.prototype.getUniqueModesOfTransport = function () {
  let modesOfTransport = [];
  this.journeys.forEach((journey) => {
  if(!modesOfTransport.includes(journey.transport)) {
    modesOfTransport.push(journey.transport)
  }
})
return modesOfTransport
};


module.exports = Traveller;
