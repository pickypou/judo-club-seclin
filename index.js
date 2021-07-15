$('#Tableau').on('click', function () {
    if (document.getElementById('lesHoraires').style.display == "none") {
        $('#lesHoraires').slideToggle(2000);
        $('#Tableau').html('cacher les horaires');
    } else {
        $('#lesHoraires').slideToggle(2000);
        setTimeout(function () {
            $('#Tableau').html('Voir les horaires');
        }, 250);
    }
});

$('#toaffich').on('click', function () {
    if (document.getElementById('epreuve').style.display == "none") {
        $('#epreuve').slideToggle(2000);
        $('#toaffich').html('Voir plus');
    } else {
        $('#epreuve').slideToggle(2000);
        setTimeout(function () {
            $('#toaffich').html('Voir moins');
        }, 250);
    }
});

