console.log("main.js loaded");
var g;
init();

function init(){
  g = new Graph();
  g.addNode(5);
  g.addNode(6);
  g.addEdge(5,6);
  g.addNode(7);
  g.addEdge(6,7);
  g.addNode(8);
  g.addEdge(8,7);
  g.addNode(4)
  g.addEdge(4,5)

  var path = g.search(4,8, new Stack);
  console.log("path", path);
}
