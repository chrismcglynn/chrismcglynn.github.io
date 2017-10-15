// Defining all variables 
let age = document.getElementById('age').input;
let male = document.getElementById('male').value;
let female = document.getElementById('female').value;
let weight = document.getElementById('weight').input;
let heightFeet = document.getElementById('feet_cm').input;
let heightInches = document.getElementById('inches').input;
let activityLevel = document.getElementById('activity_level').input;
let gainLossAmount = document.getElementById('gain_loss_amount').input;
const submit = document.getElementById('submit');

// Formulas for calculator
const height = (heightFeet * 12) + heightInches;
const maleBMR = 66 + (6.2 * weight) + (12.7 * height) - (6.76 * age);
const femaleBMR = 655.1 + (4.35 * weight) + ( 4.7 * height) - ( 4.7 * age);


// Formula to determine user's activity level
function activityLevelCalc () {
  if (male === 'male' && activityLevel === 'none') {
    maleBMR * 1.2;
  } else if (female === 'female' && activityLevel === 'none') {
    femaleBMR * 1.2;
  } else if (male === 'male' && activityLevel === 'light') {
    maleBMR * 1.375;
  } else if (female === 'female' && activityLevel === 'light') {
    femaleBMR * 1.375;
  } if (male === 'male' && activityLevel === 'moderate') {
    maleBMR * 1.55;
  } else if (female === 'female' && activityLevel === 'moderate') {
    femaleBMR * 1.55;
  } else if (male === 'male' && activityLevel === 'heavy') {
    maleBMR * 1.725;
  } else if (female === 'female' && activityLevel === 'heavy') {
    femaleBMR * 1.725;
  } else if (male === 'male' && activityLevel === 'veryHeavy') {
    maleBMR * 1.9;
  } else if (female === 'female' && activityLevel === 'veryHeavy') {
    femaleBMR * 1.9;
  }
}

// Formula for weight gain vs weight loss vs maintain weight
function gainLoss (activityLevelCalc) {
  if (gainLossAmount === 'Lose 2 Pounds per Week'){
      document.getElementById('weightLoss').innerHTML + '<p>' + activityLevelCalc - 1000 + '</p>';
      } else if (gainLossAmount === 'Lose 1.5 Pounds per Week'){
        document.getElementById('weightLoss').innerHTML + '<p>' + activityLevelCalc - 750 + '</p>';
      } else if (gainLossAmount === 'Lose 1 Pounds per Week') {
        document.getElementById('weightLoss').innerHTML + '<p>' + activityLevelCalc - 500 + '</p>';
      } else if (gainLossAmount === 'Lose 0.5 Pounds per Week') {
        document.getElementById('weightLoss').innerHTML + '<p>' + activityLevelCalc - 250 + '</p>'; 
      } else if (gainLossAmount === 'Stay the Same Weight') {
        document.getElementById('maintainWeight').innerHTML + '<p>' + activityLevelCalc + '</p>';
      } else if (gainLossAmount === 'Gain 0.5 Pound Per Week') {
        document.getElementById('weightGain').innerHTML + '<p>' + activityLevelCalc + 250 + '</p>';
      } else if (gainLossAmount === 'Gain 1 Pound Per Week') {
        document.getElementById('weightGain').innerHTML + '<p>' + activityLevelCalc + 500 + '</p>';
      }else if (gainLossAmount === 'Gain 1.5 Pounds Per Week') {
        document.getElementById('weightGain').innerHTML + '<p>' + activityLevelCalc + 750 + '</p>';
      }else if (gainLossAmount === 'Gain 2 Pounds Per Week') {
        document.getElementById('weightGain').innerHTML + '<p>' + activityLevelCalc + 1000 + '</p>';
      }
}




submit.addEventListener('click', () => {
    alert('you clicked me!')
});