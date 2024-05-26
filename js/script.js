function clicked() 
{
    fetch('http://localhost:5000/')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log(error))
 
  // Get the user's birthdate (assuming it's in the format 'YYYY-MM-DD')
  const selectedDate = document.getElementById('calendar').value;
  const userBirthdate = selectedDate;

  // Parse the birthdate string into a Date object
  const birthDate = new Date(userBirthdate);

  // Extract the month and day from the Date object
  const month = birthDate.getMonth() + 1; // Months are zero-based, so add 1
  const day = birthDate.getDate();

  // Determine the zodiac sign based on the birthdate
  let zodiacSign;
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    zodiacSign = 'Aquarius';
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    zodiacSign = 'Pisces';
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    zodiacSign = 'Aries';
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    zodiacSign = 'Taurus';
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    zodiacSign = 'Gemini';
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    zodiacSign = 'Cancer';
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    zodiacSign = 'Leo';
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    zodiacSign = 'Virgo';
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    zodiacSign = 'Libra';
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    zodiacSign = 'Scorpio';
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    zodiacSign = 'Sagittarius';
  } else {
    zodiacSign = 'Capricorn';
  }

  // Display the zodiac sign
  document.querySelector('.answer').textContent = `Your zodiac sign is ${zodiacSign}.`;

}

