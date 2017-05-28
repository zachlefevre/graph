console.log("stack.js loaded");

function Stack(){
  this.stack = [];
}

Stack.prototype.push = function(value_){
  this.stack.push(value_);
}

Stack.prototype.pop = function(){
  if(this.stack.length){
    var toPop = this.stack[this.stack.length-1];
    this.stack.shift();
    return toPop;
  }else{
    return null;
  }
}

Stack.prototype.peek = function(){
  if(this.stack[0] != undefined){
    return this.stack[0];
  }else{
    return null;
  }
}

Stack.prototype.getLength = function(){
  return this.stack.length;
}
