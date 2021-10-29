var button = document.getElementById("knapp")
button.onclick = function getData () {
    let datum = document.getElementById("datum")['value']



    fetch(`https://ihetastelaget6-default-rtdb.europe-west1.firebasedatabase.app/.json`)
        .then(response => response.json())
        .then(json => {


            let Points = []


            try {
                for (const key in json[datum]['Hum']['Log']) {
                    Points.push({ y: json[datum]['Hum']['Log'][key] })
                }


                var chart1 = new CanvasJS.Chart("chartContainer1", {

                    animationEnabled: true,

                    theme: "light2",

                    title: {

                        text: "Luftfuktighet i %"

                    },

                    data: [{

                        type: "line",

                        indexLabelFontSize: 16,


                        dataPoints: Points

                    }]

                })
                chart1.render()
            } catch {
                alert('Invalid date (no data recorded)')
            }
        })

}
var button = document.getElementById("knapp2")
button.onclick = function getData () {
    let datum = document.getElementById("datum")['value']



    fetch(`https://ihetastelaget6-default-rtdb.europe-west1.firebasedatabase.app/.json`)
        .then(response => response.json())
        .then(json => {

            let Points = []


            try {
                for (const key in json[datum]['Temp']['Log']) {
                    Points.push({ y: json[datum]['Temp']['Log'][key] })
                }


                var chart1 = new CanvasJS.Chart("chartContainer1", {

                    animationEnabled: true,

                    theme: "light2",

                    title: {

                        text: "Temperatur i C°"

                    },

                    data: [{

                        type: "line",

                        indexLabelFontSize: 16,


                        dataPoints: Points

                    }]

                })
                chart1.render()
            } catch {
                alert('Invalid date (no data recorded)')
            }
        })

}
var button = document.getElementById("knapp3")
button.onclick = function getData () {
    let datum = document.getElementById("datum")['value']



    fetch(`https://ihetastelaget6-default-rtdb.europe-west1.firebasedatabase.app/.json`)
        .then(response => response.json())
        .then(json => {


            let Points = []


            try {
                for (const key in json[datum]['Hum2']['Log']) {
                    Points.push({ y: json[datum]['Hum2']['Log'][key] })
                }


                var chart2 = new CanvasJS.Chart("chartContainer2", {

                    animationEnabled: true,

                    theme: "light2",

                    title: {

                        text: "Luftfuktighet i %"

                    },

                    data: [{

                        type: "line",

                        indexLabelFontSize: 16,


                        dataPoints: Points

                    }]

                })
                chart2.render()
            } catch {
                alert('Invalid date (no data recorded)')
            }
        })

}
var button = document.getElementById("knapp4")
button.onclick = function getData () {
    let datum = document.getElementById("datum")['value']



    fetch(`https://ihetastelaget6-default-rtdb.europe-west1.firebasedatabase.app/.json`)
        .then(response => response.json())
        .then(json => {

            let Points = []


            try {
                for (const key in json[datum]['Temp2']['Log']) {
                    Points.push({ y: json[datum]['Temp2']['Log'][key] })
                }


                var chart2 = new CanvasJS.Chart("chartContainer2", {

                    animationEnabled: true,

                    theme: "light2",

                    title: {

                        text: "Temperatur i C°"

                    },

                    data: [{

                        type: "line",

                        indexLabelFontSize: 16,


                        dataPoints: Points

                    }]

                })
                chart2.render()
            } catch {
                alert('Invalid date (no data recorded)')
            }
        })

}
var button = document.getElementById("knapp5")
button.onclick = function getData () {
    let datum = document.getElementById("datum")['value']



    fetch(`https://ihetastelaget6-default-rtdb.europe-west1.firebasedatabase.app/.json`)
        .then(response => response.json())
        .then(json => {


            let Points = []


            try {
                for (const key in json[datum]['Hum3']['Log']) {
                    Points.push({ y: json[datum]['Hum3']['Log'][key] })
                }


                var chart3 = new CanvasJS.Chart("chartContainer3", {

                    animationEnabled: true,

                    theme: "light2",

                    title: {

                        text: "Luftfuktighet"

                    },

                    data: [{

                        type: "line",

                        indexLabelFontSize: 16,


                        dataPoints: Points

                    }]

                })
                chart3.render()
            } catch {
                alert('Invalid date (no data recorded)')
            }
        })

}
var button = document.getElementById("knapp6")
button.onclick = function getData () {
    let datum = document.getElementById("datum")['value']



    fetch(`https://ihetastelaget6-default-rtdb.europe-west1.firebasedatabase.app/.json`)
        .then(response => response.json())
        .then(json => {

            let Points = []


            try {
                for (const key in json[datum]['Temp3']['Log']) {
                    Points.push({ y: json[datum]['Temp3']['Log'][key] })
                }


                var chart3 = new CanvasJS.Chart("chartContainer3", {

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

                })
                chart3.render()
            } catch {
                alert('Invalid date (no data recorded)')
            }
        })

}
var button = document.getElementById("knapp7")
button.onclick = function getData () {
    let datum = document.getElementById("datum")['value']



    fetch(`https://ihetastelaget6-default-rtdb.europe-west1.firebasedatabase.app/.json`)
        .then(response => response.json())
        .then(json => {


            let Points = []


            try {
                for (const key in json[datum]['Hum4']['Log']) {
                    Points.push({ y: json[datum]['Hum4']['Log'][key] })
                }


                var chart4 = new CanvasJS.Chart("chartContainer4", {

                    animationEnabled: true,

                    theme: "light2",

                    title: {

                        text: "Luftfuktighet"

                    },

                    data: [{

                        type: "line",

                        indexLabelFontSize: 16,


                        dataPoints: Points

                    }]

                })
                chart4.render()
            } catch {
                alert('Invalid date (no data recorded)')
            }
        })

}
var button = document.getElementById("knapp8")
button.onclick = function getData () {
    let datum = document.getElementById("datum")['value']



    fetch(`https://ihetastelaget6-default-rtdb.europe-west1.firebasedatabase.app/.json`)
        .then(response => response.json())
        .then(json => {

            let Points = []


            try {
                for (const key in json[datum]['Temp4']['Log']) {
                    Points.push({ y: json[datum]['Temp4']['Log'][key] })
                }


                var chart4 = new CanvasJS.Chart("chartContainer4", {

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

                })
                chart4.render()
            } catch {
                alert('Invalid date (no data recorded)')
            }
        })

}