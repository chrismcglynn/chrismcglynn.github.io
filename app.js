var displayText;
var calories;

function calculateBMR (gender, height, weight, age) {
  //multipliers
  var c1;
  var hm;
  var wm;
  var am;
  //final result
  var bmrResult;
  //capture input values
  age = document.getElementById('age').value;
  gender = document.getElementById('gender').value;
  weight = document.getElementById('weight').value;
  heightFeet = document.getElementById('feet').value;
  heightInches = document.getElementById('inches').value;
  //turn values (str) into numbers
  heightFeet = parseInt(heightFeet)
  heightInches = parseInt(heightInches)
  weight = parseInt(weight)
  age = parseInt(age)
  //height converter for inches
  height = heightFeet * 12  + heightInches;

  if (gender === 'male') {
    c1 = 66;
    hm = 6.2 * height;
    wm = 12.7 * weight;
    am = 6.76 * age;
  } else if (gender === 'female') {
    c1 = 655.1;
    hm = 4.35 * height;
    wm = 4.7 * weight;
    am = 4.7 * age;
  } 

 bmrResult = c1 + hm  + wm - am;
 bmrResult = Math.floor(bmrResult)
 return bmrResult
};

function calculateActivityBMR (bmrResult, activityLevel) {
  var multiplier;
  bmrResult = calculateBMR();
  activityLevel = document.getElementById('activityLevel').value;

  switch (activityLevel) {
    case 'no':
      multiplier = 1.2;
      break;

    case 'light':
      multiplier = 1.375;
      break;

    case 'moderate':
      multiplier = 1.55;
      break;

    case 'heavy':
      multiplier = 1.725;
      break;

    case 'extreme':
      multiplier = 1.9;
      break;

    default:
      throw new Error('Unknown activity level: ' + activityLevel);
  };
  activityLevel = multiplier * bmrResult
  return activityLevel
};

// Formula for weight gain vs weight loss vs maintain weight
function gainLossCalc (activityLevel ,gainLossAmount) {
  var gainLossAmount = document.getElementById('gain_loss_amount').value;
  activityLevel = calculateActivityBMR();

  switch (gainLossAmount) {
    case '-1000':
      calories = activityLevel - 1000;
      displayText = 'lose 2 pounds per week,';
      break;
    
    case '-750':
      calories = activityLevel - 750;
      displayText = 'lose 1.5 pounds per week,';
      break;

    case '-500':
      calories = activityLevel - 500;
      displayText = 'lose 1 pound per week,';
      break;

    case '-250':
      calories = activityLevel - 250;
      displayText = 'lose .5 pounds per week,';
      break;

    case '0':
      calories = activityLevel;
      displayText = 'maintain your current weight,';
      break;

    case '250':
      calories = activityLevel + 250;
      displayText = 'gain .5 pounds per week,';
      break;

    case '500':
      calories = activityLevel + 500;
      displayText = 'gain 1 pound per week,';
      break;

    case '750':
      calories =  activityLevel + 750;
      displayText = 'gain 1.5 pounds per week,';
      break;

    case '1000':
      calories = activityLevel + 1000;
      displayText = 'gain 2 pounds per week,';
      break;

    default:
      throw new Error('Select your nutrition goals');
  };
  calories = Math.floor(calories) + " Calories";
  return calories;
};

function calculateMacros (){
  $("#submit").click(function(){
    gainLossCalc();
      $("#instruct").toggle(function(){
          $('#instruct').replaceWith( '<p class="white-text">In order to ' + '<span style="font-weight: bold">' +  displayText + '</span>' + ' your daily calorie goals should be:</p>' + '<p class="white-text">' + gainLossCalc() + '</p>');
    });
  });
};

calculateMacros();