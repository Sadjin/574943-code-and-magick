var wizardSpeed = 3;
var wizardWidth = 70;
var fireballSize = 22;
var fireballSpeedDownWind = 5;
var fireballSpeedUpWind = 2;
var ratioHeightToWidthWizard = 1.337;


var getFireballSpeed = function (left) {
  if (left) {
    return fireballSpeedDownWind;
  }; 
  return fireballSpeedUpWind;
};

var getWizardHeight = function () {
  return ratioHeightToWidthWizard * wizardWidth; //
};

var getWizardX = function (width) {
  return (width - wizardWidth) / 2;
};

var getWizardY = function (height) {  
  return height / 3;
};
