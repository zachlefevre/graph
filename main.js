console.log("main.js loaded");
var g;
init();

function init(){
  g = new Graph();
  g.addNode(1);
  g.addNode(2);
  g.addNode(3);
  g.addNode(4);
  g.addNode(5);
  g.addNode(6);
  g.addNode(7);
  g.addNode(8);

  g.addEdge(1,2)
  g.addEdge(2,3)
  g.addEdge(3,4)
  g.addEdge(4,5)
  g.addEdge(5,6)
  g.addEdge(6,7)
  g.addEdge(7,8)


  g.addNode(50);
  g.addNode(51);
  g.addNode(52);
  g.addNode(53);

  g.addEdge(5,50)
  g.addEdge(50,51)
  g.addEdge(51,52)
  g.addEdge(52,53)

  //var path = g.search(5,51, new Queue);
  //console.log("path", path);
}
