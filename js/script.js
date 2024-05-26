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
  } else if(day == NaN || month == NaN){
    zodiacSign = 'Capricorn';
  } else {
    zodiacSign = 'null';
  }
  // Display the zodiac sign
  return zodiacSign;
}

function Display_restaurants(sing, location)
{
  fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1&entity_type=city&q=${location}&count=10&radius=10000&sort=real_distance&order=asc&lat=28.6139398&lon=-81.2528767`)
 .then(response => response.json())
 .then(data => {
    const restaurants = data.restaurants;
    const output = [];
    restaurants.forEach(restaurant => {
      if(restaurant.cuisines.includes(sing))
      {
        output.push(restaurant);
      }
    });
    const output_html = output.map(restaurant => {
      return `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${restaurant.name}</h5>
          <p class="card-text">${restaurant.location.address}</p>
          <p class="card-text">${restaurant.location.city}, ${restaurant.location.country_id}</p>
          <p class="card-text">${restaurant.average_cost_for_two}</p>
          <p class="card-text">${restaurant.currency}</p>
          <p class="card-text">${restaurant.phone_numbers}</p>
          <p class="card-text">${restaurant.url}</p>
        </div>
      </div>
      `;
    }).join('');
    document.getElementById('restaurants').innerHTML = output_html;
  });
  
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
  `;

  Display_restaurants(zodiacSign,location);
}


