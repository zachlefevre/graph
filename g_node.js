function Node(value_){
  this.val = value_;
  this.edges = [];
  this.searched = false;
  this.parent = null;
}

Node.prototype.addEdge = function(neighbor_)
{
  this.edges.push(neighbor_);
}

Node.prototype.getVal = function(){
  return this.val;
}
