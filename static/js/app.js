const info = "../../Data/samples.json";

// Fetch the JSON data and console log it
d3.json(info).then(function(data) {
  console.log(data);
});

const bellybutton = d3.json(info);
console.log("Bellybutton Biodiversity: ", bellybutton);

function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }

function buildPlot() {
    d3.json(info).then(function(data) {
  
      // Grab values from the data json object to build the plots
      var names = data.dataset.names;
      var metadata = data.dataset.metadata;
      var samples = data.dataset.samples;

      var trace1 = {
        x: names,
        y: eyeFlicker,
        type: "bar"
      };
  
      Plotly.newPlot("plot", data, layout);
  
    });
  }
  
  buildPlot();