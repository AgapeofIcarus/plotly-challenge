function buildMetadata(selection) {

    // Read the json data
    d3.json("samples.json").then((Data) => {

        console.log(Data);

        // Filter the data to get metadata
        var filteredData = Data.metadata;
        console.log(filteredData);

        var sample = filteredData.filter(item => item.id == selection);
        console.log("showing sample[0]:");
        console.log(sample[0]);

        var metadata = d3.select("#sample-metadata").html("");

        Object.entries(sample[0]).forEach(([key, value]) => {
            metadata.append("p").text(`${key}: ${value}`);
        });

        console.log("next again");
        console.log(metadata);
    });
}

//Get the data and generate the plots
function buildcharts(selection) {

    // Fetch the JSON data
    d3.json("samples.json").then((data)=> {

        var filteredData = Data.samples;
        console.log(parsedData);

        var items = filteredData.filter(item => item.id == selection)[0];
        console.log(items);

        var values = items.sample_values; 
        var barChartValues = values.slice(0, 10).reverse();
        console.log(barChartValues);

        var idValues = sampleDict.otu_ids;
        var barChartLabels = idValues.slice(0, 10).reverse();
        console.log("otu_ids");
        console.log(barChartLabels);
}

init();