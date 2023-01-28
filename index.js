let weatherLondon = require('./weather')


//let weatherLondon = require('./weather')
//let weatherLondon = require('./pilotAffected')
const x = weatherLondon.weather

console.log(`Lat: ${weatherLondon.coord.lat}`);
console.log(`Lon: ${weatherLondon.coord.lon}`);

//console.log(`Edad: ${weatherLondon.weather[0].pilotAffected[0].age}`);
console.log(`Las afectados mayores a 18 años son: `);
for(var i=0; i<3; i++)
{
    
    if (weatherLondon.weather[0].pilotAffected[i].age >= 18){

        console.log(`Nombre: ${weatherLondon.weather[0].pilotAffected[i].name}`);
    }
}


//console.log(weatherLondon.coord.lat)
//console.log(weatherLondon.coord.lon)



