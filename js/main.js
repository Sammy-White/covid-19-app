
var btn = document.querySelector("#btn")

btn.onclick = function () {
    var input = document.querySelector('#input')
    var value = input.value;
    var coun = '';
  
        coun = value

        getData(coun)
    }

    

function getData(coun) {

    fetch('https://api.covid19api.com/summary')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        global = data.Global
        let country = data.Countries.filter((value) => value.Slug == coun)
        appendData(country)
    })
    .catch(function(err) {
        console.log(err);
    });

}


function appendData(country) {
    for (var i = 0; i < country.length; i++) {

        var total = country[i].TotalConfirmed;
        var deaths = country[i].TotalDeaths;
        var recovered = country[i].TotalRecovered;

        document.getElementById('fig1').innerHTML = total;
        document.getElementById('fig2').innerHTML = deaths;
        document.getElementById('fig3').innerHTML = recovered;
        
    }
    var all = Object.values(global)
    document.getElementById('g1').innerHTML = all[1];
    document.getElementById('g2').innerHTML = all[3];
    document.getElementById('g3').innerHTML = all[5];
    

    var chart = document.getElementById('chart');
    var pieChart = new Chart(chart, {
        type: 'bar',
        data: {
            labels: ['Total Confirmed Cases', 'Total Deaths', 'Totoal Recovered'],
            datasets: [
                {
                    label: 'Covid-19 Chart',
                    backgroundColor: ['orange', 'red', 'green'],
                    data: [total, deaths, recovered],
                    barThickness: 50,
                    minBarLength: 5,
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}














