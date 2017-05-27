console.log("main.js loaded");
var g;
init();

function init(){
  g = new Graph();
  g.addNode(5);
  g.addNode(6);
  g.addEdge(5,6);
}
