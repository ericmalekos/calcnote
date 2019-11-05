//heart of the grapher, applies graphics to the canvas



function drawGraph(config) {
// user defined properties
this.canvas = document.getElementById(config.canvasId);
this.minX = config.minX;
this.minY = config.minY;
this.maxX = config.maxX;
this.maxY = config.maxY;
this.unitsPerTick = config.unitsPerTick;

// constants
this.axisColor = '#aaa';
this.font = '6pt Courier New';
this.tickSize = 10;

// relationships
this.context = this.canvas.getContext('2d');
this.rangeX = this.maxX - this.minX;
this.rangeY = this.maxY - this.minY;
this.unitX = this.canvas.width / this.rangeX;
this.unitY = this.canvas.height / this.rangeY;
this.centerY = Math.round(Math.abs(this.minY / this.rangeY) * this.canvas.height);
this.centerX = Math.round(Math.abs(this.minX / this.rangeX) * this.canvas.width);
this.iteration = (this.maxX - this.minX) / 1000;
this.scaleX = this.canvas.width / this.rangeX;
this.scaleY = this.canvas.height / this.rangeY;

// draw x and y axis
this.resetGraph();
this.drawXAxis();
this.drawYAxis();
}

//resets graphs inbetween new loads
drawGraph.prototype.resetGraph = function() {
    var context = this.context;
    context.clearRect(0,0,this.canvas.height*2,this.canvas.width*2);

};

//draws X-axis
drawGraph.prototype.drawXAxis = function() {
var context = this.context;
context.save();
context.beginPath();
context.moveTo(0, this.centerY);
context.lineTo(this.canvas.width, this.centerY);
context.strokeStyle = this.axisColor;
context.lineWidth = 0.8;
context.stroke();

// draw tick marks
var xPosIncrement = this.unitsPerTick * this.unitX;
var xPos, unit;
context.font = this.font;
context.textAlign = 'center';
context.textBaseline = 'top';

// draw left tick marks
xPos = this.centerX - xPosIncrement;
unit = -1 * this.unitsPerTick;
while(xPos > 0) {
    context.moveTo(xPos, this.centerY - this.tickSize / 2);
    context.lineTo(xPos, this.centerY + this.tickSize / 2);
    context.stroke();
    context.fillText(unit, xPos, this.centerY + this.tickSize / 2 + 3);
    unit -= this.unitsPerTick;
    xPos = Math.round(xPos - xPosIncrement);
}

// draw right tick marks
xPos = this.centerX + xPosIncrement;
unit = this.unitsPerTick;
while(xPos < this.canvas.width) {
    context.moveTo(xPos, this.centerY - this.tickSize / 2);
    context.lineTo(xPos, this.centerY + this.tickSize / 2);
    context.stroke();
    context.fillText(unit, xPos, this.centerY + this.tickSize / 2 + 3);
    unit += this.unitsPerTick;
    xPos = Math.round(xPos + xPosIncrement);
}
context.restore();
};

//draws Y-axis
drawGraph.prototype.drawYAxis = function() {
var context = this.context;
context.save();
context.beginPath();
context.moveTo(this.centerX, 0);
context.lineTo(this.centerX, this.canvas.height);
context.strokeStyle = this.axisColor;
context.lineWidth = 0.8;
context.stroke();

// draw tick marks
var yPosIncrement = this.unitsPerTick * this.unitY;
var yPos, unit;
context.font = this.font;
context.textAlign = 'right';
context.textBaseline = 'middle';

// draw top tick marks
yPos = this.centerY - yPosIncrement;
unit = this.unitsPerTick;
while(yPos > 0) {
    context.moveTo(this.centerX - this.tickSize / 2, yPos);
    context.lineTo(this.centerX + this.tickSize / 2, yPos);
    context.stroke();
    context.fillText(unit, this.centerX - this.tickSize / 2 - 3, yPos);
    unit += this.unitsPerTick;
    yPos = Math.round(yPos - yPosIncrement);
}

// draw bottom tick marks
yPos = this.centerY + yPosIncrement;
unit = -1 * this.unitsPerTick;
while(yPos < this.canvas.height) {
    context.moveTo(this.centerX - this.tickSize / 2, yPos);
    context.lineTo(this.centerX + this.tickSize / 2, yPos);
    context.stroke();
    context.fillText(unit, this.centerX - this.tickSize / 2 - 3, yPos);
    unit -= this.unitsPerTick;
    yPos = Math.round(yPos + yPosIncrement);
}
context.restore();
};

//draws the curves, lines, etc
drawGraph.prototype.drawEquation = function(equation, color, thickness) {
var context = this.context;
context.save();
context.save();
this.transformContext();

context.beginPath();
context.moveTo(this.minX, equation(this.minX));

for(var x = this.minX + this.iteration; x <= this.maxX; x += this.iteration) {
    context.lineTo(x, equation(x));
}

context.restore();
context.lineJoin = 'round';
context.lineWidth = thickness;
context.strokeStyle = color;
context.stroke();
context.restore();
};

//moves it to where it needs to be
drawGraph.prototype.transformContext = function() {
var context = this.context;

// move context to center of canvas
this.context.translate(this.centerX, this.centerY);

/*
    * stretch grid to fit the canvas window, and
    * invert the y scale so that that increments
    * as you move upwards
    */
context.scale(this.scaleX, -this.scaleY);
};

//button action that starts the process of mapping it
function mapGraph(){
    var myGraph = new drawGraph({
        canvasId: 'graphingCanvas',
        minX: Math.trunc(-(document.getElementById("size").value)),
        minY: Math.trunc(-(document.getElementById("size").value)),
        maxX: Math.trunc(document.getElementById("size").value),
        maxY: Math.trunc(document.getElementById("size").value),
        unitsPerTick: Math.trunc(document.getElementById("size").value/6)
    });
    let equationVar = document.getElementById('equation').value
    //cant quite get it to work. equationVar has the right thing, but code 
    //only works if it is hardcoded into the return function. EG: x*3 works, but not a variable
    myGraph.drawEquation( function(x) { return x*x ; } , 'green', 0.8);
    alert(equationVar);
};

