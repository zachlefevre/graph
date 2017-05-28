console.log("bstree.js loaded")
/*
node.edges[0] = parent
node.edges[1] = left
node.edges[2] = right

parent and child are required because graph is bidirectional
*/

function BTree(){
  Graph.call(this)
}

BTree.prototype = new Graph();

BTree.prototype.addNodeHelper = function(node, nodeToAdd){
  console.log("in recCall")
  if(nodeToAdd.getVal() <= node.getVal()){
    if(node.edges[1] == null || node.edges[1] == undefined){
      node.edges[1] = nodeToAdd
      nodeToAdd.edges[0] = node
      return node.edges[1]
    }
    return this.addNodeHelper(node.edges[1], nodeToAdd)
  }else if(nodeToAdd.getVal() > node.getVal()){
    if(node.edges[2] == null || node.edges[2] == undefined){
      node.edges[2] = nodeToAdd
      nodeToAdd.edges[0] = node
      return node.edges[2]
    }
    return this.addNodeHelper(node.edges[2], nodeToAdd)
  }
}

BTree.prototype.addNode = function(val){
  n = Graph.prototype.addNode.call(this,val)
  if(this.nodes[0] == n){
    this.nodes[0] = n
    return this.nodes[0];
  }else{
    return this.addNodeHelper(this.nodes[0], n)
  }
}
