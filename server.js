console.log('Hier komt je server')
// Dit is het startpunt van de server
// Hierin importeer je de benodigde pakketten en definieer je de server

// 1. Importeer het npm pakket express uit de node_modules map
import express from 'express';

// 2. Hiermee maak je een nieuwe express app
// Deze app is een object met een aantal methodes die je kunt gebruiken om een server te maken en routes te definiëren
const app = express();

// 3. Hiermee start je de server op poort 3000
// De ('app') server luistert naar requests op poort 3000
// De server reageert op requests met de juiste route, de server stuurt een response terug naar de client
app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})


