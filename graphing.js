//heart of the grapher, applies graphics to the canvas


function draw() {
    try {
      // compile the expression once
      const expression = document.getElementById('graphEquation').value
      const expr = math.compile(expression)

      // evaluate the expression repeatedly for different values of x
      const xValues = math.range(-(Math.trunc(document.getElementById("size").value)),
                                 Math.trunc(document.getElementById("size").value),
                                 0.01).toArray()
      const yValues = xValues.map(function (x) {return expr.evaluate({x: x}) } )

      // render the plot using plotly
      const trace1 = {
        x: xValues,
        y: yValues,
        type: 'scatter'
      }
      const data = [trace1]
      Plotly.newPlot('plot', data)
    }
    catch (err) {
      console.error(err)
      alert(err)
    }
  }