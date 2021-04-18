const info = "../samples.json";

//Get the data and generate the plots
function getPlot(id) {

    // Fetch the JSON data and console log it
    d3.json(info).then(function(data) {
        console.log(data);
    });

    var washing = data.metadata.map(data => data.washing)
    console.log(`Washing Frequency: ${washing}`)

    var samples = data.samples.filter(s => s.id.toString() === id)[0];

        console.log(samples);