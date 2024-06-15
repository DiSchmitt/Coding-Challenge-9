//U4888-2664
//Task 3: Create an external JavaScript file.
//Write a function to initialize your page that creates div elements as data points and attaches interactive behaviors using D3.js.
function main() {
  let testdata = ["151", "100", "135", "107", "156"];

  let infoholder = d3.select("#datapointcontainer");

  infoholder
    .selectAll(".datapoint")
    .data(testdata)
    .enter()
    .append("div")
    .attr("class", "datapoint")
    .text(function (d) {
      return d;
    })
    //Attach event listeners for "mouseover" and "mouseout" to change the div elements' styles on hover and revert them when the mouse moves away.
    //Task 4: On "mouseover", change the div's background color to a more vibrant one (e.g., "firebrick").
    //Royal blue is more vibrant than pale turquoise so I think this is good.
    .on("mouseover", function () {
      d3.select(this).style("background-color", "royalblue");
    })
    //On "mouseout", revert the div's background color to its original state.
    .on("mouseout", function () {
      d3.select(this).style("background-color", "paleturquoise");
    });
}