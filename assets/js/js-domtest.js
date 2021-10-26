var button = document.getElementById("knapp");
button.onclick = function getData () {
    let datum = document.getElementById("datum")['value']



    fetch(`https://temperatur-projekt-default-rtdb.europe-west1.firebasedatabase.app/.json`)
    .then(response => response.json())
    .then(json => {

        
        let Points = []
        

         try{
            for(const key in json[datum]['Hum']['Log']) {
                Points.push({y: json[datum]['Hum']['Log'][key]})
            }


            var chart1 = new CanvasJS.Chart("chartContainer1", {

                animationEnabled: true,

                theme: "light2",

                title: {

                    text: "Temperatur"

                },

                data: [{

                    type: "line",

                    indexLabelFontSize: 16,


                    dataPoints: Points

                }]

            });
            chart1.render();
         }catch{
            alert('Invalid date (no data recorded)')
         }
    })

}
var button = document.getElementById("knapp2");
button.onclick = function getData () {
    let datum = document.getElementById("datum")['value']



    fetch(`https://temperatur-projekt-default-rtdb.europe-west1.firebasedatabase.app/.json`)
    .then(response => response.json())
    .then(json => {
        
        let Points = []
        

         try{
            for(const key in json[datum]['Temp']['Log']) {
                Points.push({y: json[datum]['Temp']['Log'][key]})
            }


            var chart1 = new CanvasJS.Chart("chartContainer1", {

                animationEnabled: true,

                theme: "light2",

                title: {

                    text: "Temperatur"

                },

                data: [{

                    type: "line",

                    indexLabelFontSize: 16,


                    dataPoints: Points

                }]

            });
            chart1.render();
         }catch{
            alert('Invalid date (no data recorded)')
         }
    })

}