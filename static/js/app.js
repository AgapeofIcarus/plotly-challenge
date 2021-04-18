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

    var values = samples.sample_values.slice(0, 10).reverse();

    var otu_ids = (samples.otu_ids.slice(0, 10)).reverse();

    var idOtu = idValues.map(data => "OTU " + data)

    console.log(`OTU IDs: ${idOtu}`)

    var labels = samples.otu_labels.slice(0, 10);

    console.log(`Sample Values: ${samples}`)
    
    console.log(`Id Values: ${values}`)

    //Lets get started on the actual plotting. We've got to trace.

    var trace = {
        x: values,
        y: idOtu,
        text: labels,
        type:"bar",
        orientation: "h",
    };

    var data = [trace];

    var layout = {
        title: "Top 10 OTUs",
        yaxis:{
            tickmode:"linear",
        },
        margin: {
            l: 100,
            r: 100,
            t: 30,
            b: 20
        }
    };

    Plotly.newPlot("bar", data, layout);

    
