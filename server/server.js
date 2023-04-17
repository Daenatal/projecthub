
const express = require('express');
const path = require('path');

const monsterRouter = require('./routes/monsters.route');
const messagesRouter = require('./routes/messages.route');

const app = express();

const PORT = 3000;

// app.use(function(req, res, next) {
    
// })

app.use((req, res, next) => {
    const start = Date.now();
    next();
    //actions go here...on the response return up the chain
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json()); //says content body to application/json when the request received has the json header

app.use('/monsters', monsterRouter); //mounting the router on the app object
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});



/*

app.get('/', (req, res) => {
    res.send({
        id: 1,
        name: 'Sir Isach Snapes'
    });
});

const http = require('http'); <---using node built in modules

const PORT = 3000;

const server = http.createServer();

const monsters = [
    {
        id: 0,
        name: 'Glavenus',
    },
    {
        id: 1,
        name: 'Nargacuga',
    }
    ,{
        id: 2,
        name: 'Rathalos',
    }
]

server.on('request', (req, res) => {
    const items = req.url.split('/');
    if (req.method === 'POST' && items[1] === 'friends') {
        req.on('data', (data) => {
            const friend = data.toString();
            console.log('Request: ', friend);
            monsters.push(JSON.parse(friend));
            
        });
        req.pipe(res);
    } else if (req.method === 'GET' && items[1] === 'friends') {
        // res.writeHead(200, {
        //     'Content-Type': 'application/json',
        // });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if (items.length === 3) {
            const friendIndex = Number(items[2]);
            res.end(JSON.stringify(monsters[friendIndex]));
        } else {
            res.end(JSON.stringify(monsters));
        }
    } else if (req.method === 'GET' && items[1] === 'messages') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>This is coming from the backend</li>');
        res.write('<li>Pretty cool to see huh? Hello from the server!</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
    
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});



// const { parse } = require('csv-parse');
// const fs = require('fs');

// const habitablePlanets = [];

// function isHabitablePlanet(planet) {
//     return planet['koi_disposition'] === 'CONFIRMED'
//         && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
//         && planet['koi_prad'] < 1.6;
// }

// fs.createReadStream('kepler.csv')
//     .pipe(parse({
//         comment: '#',
//         columns: true,
//     }))
//     .on('data', (data) => {
//         if (isHabitablePlanet(data)) {
//             habitablePlanets.push(data);
//         }
        
//     })
//     .on('error', (err) => {
//         console.log(err);
//     })
//     .on('end', () => {
//         console.log(`${habitablePlanets.length} habitable planets found!`);
//         console.log(habitablePlanets.map((planet) => {
//             return planet['kepler_name'];
//         }))
//     });

*/