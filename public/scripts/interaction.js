
// hiermee slecteer je alle ranking buttons
// en voegt een event listener toe aan elke button
// de event listener reageert op een click event
document.querySelectorAll('.ranking-button').forEach(button => {
    button.addEventListener('click', function() {
        // Vind de dichtstbijzijnde parent section van de geklikte button
        // De parent section bevat zowel de button als de ranking-sectie
        // De closest() methode zoekt naar het dichtstbijzijnde element dat voldoet aan de opgegeven selector
        const parentSection = button.closest('.house');

        // Vind de ranking-sectie die direct volgt na de ouder sectie
        const rankingSection = parentSection.nextElementSibling;
        // Toggle een class om te tonen/verbergen 
        // De class 'show-ranking' bevat de CSS regels om de ranking-sectie te tonen
        rankingSection.classList.toggle('show-ranking');
    });
});

// hiermee slecteer je alle sliders
document.querySelectorAll('.slider').forEach(slider => {
    // Voeg een event listener toe aan elke slider
    // De event listener reageert op een input event
    // De input event wordt geactiveerd wanneer de waarde van de slider verandert
    slider.addEventListener('input', function() {
        let value = slider.value;
        // Update de tekst van de span die de waarde toont
        // De span die de waarde toont is het volgende element van de slider
        // De nextElementSibling eigenschap geeft het volgende element van het geselecteerde element terug
        slider.nextElementSibling.innerText = value;
    });
});
