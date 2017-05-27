console.log("graph.js loaded");
function Graph()
{
  this.nodes = [];
}

Graph.prototype.addNode = function(value_)
{
  var n = new Node(value_);
  this.nodes.push(n);
}

Graph.prototype.getNode = function(node_){
  for(var i = 0; i < this.nodes.length; i++){
    if(this.nodes[i].getVal() == node_){
      return this.nodes[i];
    }
  }
  return null;
}

Graph.prototype.addEdge = function(val1_, val2_)
{
  node1 = this.getNode(val1_);
  node2 = this.getNode(val2_);
  if(node1 && node2){
    node1.addEdge(node2);
    node2.addEdge(node1);
    return true
  }else{
    return false;
  }
}

Graph.prototype.bfs = function(to, from){
  var toSearch = new Queue();
  nodeTo = this.getNode(to);
  nodeFrom = this.getNode(from);
  toSearch.push(to);
}
