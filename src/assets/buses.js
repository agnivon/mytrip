const fs = require('fs');
const random = require('random');

const data = {
    buses: [],
    places: ['Bengaluru', 'Chennai', 'Mumbai', 'Jaipur']
}

const currentDate = Date.now();
const monthMillis = (24 * 3600 * 1000) * 30;
const places = data.places;

for(let i = 1; i <= 200; i++) {

    let source = places[random.int(0, places.length - 1)];
    let destination = places.filter(p => p !== source)[random.int(0, places.length - 2)];

    data.buses.push({
        id: i,
        bus_name: `Bus ${i}`,
        source: source,
        destination: destination,
        dept_time: random.int(currentDate, currentDate + monthMillis),
        coach_type: 'AC',
        seats_available: 4 * random.int(5, 15),
        fare: String(random.int(500, 2000))
    })
}

fs.writeFileSync('src/assets/buses.json', JSON.stringify(data.buses));
