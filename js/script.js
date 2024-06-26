function getZodiac()
{
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
  } else if(day == NaN && month == NaN){
    zodiacSign = 'Capricorn';
  } else {
    zodiacSign = 'Capricorn';
  }
  // Display the zodiac sign
  return zodiacSign;
}

function foodRecommendation(zodiacSign)
{
  if  (zodiacSign == 'Aries')
  {
    return 'seafood';
  }
  else if (zodiacSign == 'Taurus')
  {
    return 'mediterranean';
  }
  else if (zodiacSign == 'Gemini')
  {
    return 'scandinavian';
  }
  else if(zodiacSign == 'Cancer')
  {
    return 'french';
  }
  else if(zodiacSign == 'Leo')
  {
    return 'gastropub';
  }
  else if(zodiacSign == 'Virgo')
  {
    return 'sandwiches';
  }
  else if(zodiacSign == 'Libra')
  {
    return 'cafes';
  }
  else if(zodiacSign == 'Scorpio')
  {
    'sushibars';
  }
  else if(zodiacSign == 'Sagittarius')
  {
    return 'vegan';
  }
  else if(zodiacSign == 'Capricorn')
  {
    return 'steakhouses';
  }
  else if(zodiacSign == 'Aquarius')
  {
    return 'italian';
  }
  else(zodiacSign == 'Pisces')
  {
    return 'falafel';
  }
  
}

function Display_restaurants(sing, location)
{
  const options = {method: 'GET',headers: new Headers({
    "ngrok-skip-browser-warning": "69420",
    }),};
  categories = foodRecommendation(sing)
  fetch('https://b609-23-242-61-167.ngrok-free.app/res?location=' + location + '&categories=' + categories,options)
 .then((response) =>{
    if(response.ok){
      return response.json()
    }
    throw new Error('error')
 })
 .then((data) => {
  if(data.error)
    {
      var output = 
      `
      <h5 class="card-title">${data.error.code}</h5>
      <p class="card-text">${data.error.description}</p>
      `;
      
    document.getElementById('restaurants').innerHTML = output;
    return;
    }
    const restaurants = data.businesses;
    var output = "";
    for (let i = 0; i < restaurants.length; i++) {
      output+=
        `<div class="card">
         <img class= "card" src="${restaurants[i].image_url}" alt="restaurant image">

            <div class="card-body">
              <h5 class="card-title">${restaurants[i].name}</h5>
              <p class="card-text">${restaurants[i].location.address1}</p>
              <p class="card-text">${restaurants[i].location.city}, ${restaurants[i].location.state}</p>
              <p class="card-text">rating: ${restaurants[i].rating}</p>
              <p class="card-text">with : ${restaurants[i].review_count} reviews</p>
            </div>

        </div>`;
    }
    document.getElementById('restaurants').innerHTML = output;
  })
  .catch((error) =>{
    console.log(error);
  })
  ;
}

function clicked() 
{
  const zodiacSign = getZodiac();

  if(zodiacSign == 'null')
  {
    document.getElementById('answer').innerHTML = 
    `
    <p> Please enter a valid date.</p>
    `;
    return;
  }

  const location = document.getElementById('location').value;
  document.getElementById('answer').innerHTML = 
  `
  <p> Your zodiac sign is ${zodiacSign}.</p>
  <p> And your zodiac food for today is ${foodRecommendation(zodiacSign)}.</p>
  `;

  Display_restaurants(zodiacSign,location);
}


