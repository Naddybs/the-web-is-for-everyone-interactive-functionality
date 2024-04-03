console.log('Hier komt je server')
// Dit is het startpunt van de server
// Hierin importeer je de benodigde pakketten en definieer je de server

// 1. Importeer het npm pakket express uit de node_modules map
import express from 'express';

 import fetchJson from './helpers/fetch-json.js'
console.log(fetchJson)

const apiUrl = `https://fdnd-agency.directus.app/items/f_list/${9}?fields=*.*.*`;
console.log(apiUrl)

fetchJson(`https://fdnd-agency.directus.app/items/f_list/${9}?fields=*.*.*`).then((apiData) => {
    console.log(apiData)
});

// 2. Hiermee maak je een nieuwe express app
// Deze app is een object met een aantal methodes die je kunt gebruiken om een server te maken en routes te definiëren
const app = express();


// 4. hiermee zeg je dat de server de ejs template engine moet gebruiken
// De ejs template engine zorgt ervoor dat je dynamische html pagina's kunt maken
app.set('view engine', 'ejs')
// De server zoekt de ejs bestanden in de views map
app.set('views', './views')

// 5. Hiermee zeg je dat de server de public map moet gebruiken voor statische bestanden
// De public map bevat bestanden die je kunt gebruiken in de html pagina's
app.use(express.static('public'))

// dit zorgt ervoor dat het werken met request data makkelijker wordt
app.use(express.urlencoded({extended: true}))


// hiermee maak je een array aan waarin je de beoordelingen van de gebruiker opslaat
// deze array wordt gebruikt om de beoordelingen van de gebruiker te tonen op de pagina
const algemeen = [] 

// 6. Hiermee definieer je een route voor de homepagina
// De route is een http GET request naar de homepagina
// De server reageert op de request met een response
// De response is een html pagina die gerenderd wordt met de ejs template engine
// De response bevat de data van de api
// De data van de api wordt in de html pagina getoond
// De data van de api bevat de huizen en de beoordelingen van de gebruiker
// De beoordelingen van de gebruiker worden opgeslagen in de algemeen array
// De beoordelingen van de gebruiker worden getoond op de pagina
app.get('/', function (request, response) {
    fetchJson(apiUrl).then((apiData) => {
        response.render('index.ejs', 
        {houses: apiData.data.houses, 
        algemeen: algemeen});
    })
});

app.post('/', (req, res) => {
    // req.body bevat de data van het formulier
    console.log(req.body);
    algemeen.push(req.body.algemeneBeoordeling);
    // Verwerk de data hier (bijvoorbeeld opslaan in een database)
    // Stuur een response terug, zoals een redirect of een boodschap
    res.redirect(303,'/');
    console.log('Beoordeling opgeslagen');
});



// 3. Hiermee start je de server op poort 4000
// De ('app') server luistert naar requests op poort 4000
// De server reageert op requests met de juiste route, de server stuurt een response terug naar de client
app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})


