console.log("queue.js loaded");

function Queue(){
  this.queue = [];
}

Queue.prototype.push = function(value_){
  this.queue.push(value_);
}

Queue.prototype.pop = function(){
  if(this.queue.length){
    var toPop = this.queue[0];
    this.queue.shift();
    return toPop;
  }else{
    return null;
  }
}

Queue.prototype.peek = function(){
  if(this.queue[0] != undefined){
    return this.queue[0];
  }else{
    return null;
  }
}

Queue.prototype.getLength = function(){
  return this.queue.length;
}
