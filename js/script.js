var wizardSpeed = 3;
var wizardWidth = 70;
var fireballSize = 22;
var fireballSpeedDownWind = 5;
var fireballSpeedUpWind = 2;


var getFireballSpeed = function (left) {
  if (left) {
    return fireballSpeedDownWind;
  } 
  return fireballSpeedUpWind;
}

var getWizardHeight = function () {
  return 1.337 * wizardWidth;
}

var getWizardX = function (width) {
  return (width * .5) - (wizardWidth / 2);
}

var getWizardY = function (height) {
  return height * 0.333333;
}
