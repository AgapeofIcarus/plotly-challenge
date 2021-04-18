const info = "samples.json";

//Get the data and generate the plots
function getPlot(id) {

    // Fetch the JSON data and console log it
    d3.json(info).then(function(data) {
        console.log(data);
    });

    var wfreq = data.metadata.map(data => data.wfreq)
    console.log(`Washing Frequency: ${wfreq}`)

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

    //Bubble plot now

    var trace1 = {
        x: samples.otu_ids,
        y: samples.sample_values,
        mode: "markers",
        marker: {
            size: samples.sample_values,
            color: samples.otu_ids
        },
        text: samples.otu_labels

    };

    var layout = {
        xaxis:{title: "OTU IDs"},
        height: 600,
        width: 1300
    };

    var data1 = [trace1];

    Plotly.newPlot("bubble", data1, layout); 

    // Now for the pie chart
    var tracePie = {
        labels: idOtu,
        values:values,
        type:"pie",
    }

    var data = [tracePie]

    Plotly.newPlot("gauge", data)

    };    

// Done plotting. Now lets get the data.

function getInfo(id) {
    d3.json("samples.json").then((data)=> {

        var metadata = data.metadata;

        console.log(metadata)

        var result = metadata.filter(meta => meta.id.toString() === id)[0];

        var demographics = d3.select("#sample-metadata");

        demographics.html("");

        Object.entries(result).forEach((key) => {   
            demographics.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");    
        });
    });
}

// Function event time

function optionChanged(id) {
    getPlot(id);
    getInfo(id);
}

function init() {
    var dropdown = d3.select("#selDataset");

    d3.json("samples.json").then((data)=> {
        console.log(data)

        data.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });

        getPlot(data.names[0]);
        getInfo(data.names[0]);
    });
}

init();