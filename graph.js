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

Graph.prototype.getParentArr = function(node){
  var retArr = []
  for(var i = node; i != null; i = i.parent){
    retArr.push(i);
  }
  return retArr.reverse();
}

Graph.prototype.bfs = function(from, to){
  var toSearch = new Queue();
  var solutionArr = []
  nodeFrom = this.getNode(from);
  nodeTo = this.getNode(to);
  if(nodeTo != null && nodeFrom != null){
    toSearch.push(nodeFrom);
    nodeFrom.searched = true;
    while(toSearch.getLength() > 0){
      current = toSearch.pop();
      if(current == nodeTo){
        solutionArr = g.getParentArr(current);
        g.reset();
      }else{
        for(var i = 0; i < current.edges.length; i++){
          if(!current.edges[i].searched){
            toSearch.push(current.edges[i])
            current.edges[i].searched = true;
            current.edges[i].parent = current;
          }
        }
      }
    }
  }
  return solutionArr;
}

Graph.prototype.reset = function(){
  for(var i = 0; i < this.nodes.length; i++){
    this.nodes[i].searched = false;
    this.nodes[i].parent = null;
  }
}
