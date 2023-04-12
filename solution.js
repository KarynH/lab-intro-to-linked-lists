const { nums, words } = require("./data/data.js");


class Node {
  constructor(data = null) {//data is default set to null 
    this.data = data; //when a instance of a node is created. The value of the data is assigned to the property name data
    this.next = null; //the pointer is default at null unless instanitiated
  }
}

class LinkedList {
  constructor(head = null) { 
    this.head = head;


  }

  insert(data) { 

    let newNode = new Node(data)
    newNode.next = this.head;
    this.head = newNode;
  }

 size() {
    let count = 0;
    let node = this.head;
    while(node) {
      count++;
      node = node.next;
    }
    return count;
 }



search(key) {

  //start from the head of the list.
  let node = this.head;

  while(node !== null && node.data !== key){
    node = node.next;
  }

  return node 
}


}

module.exports = {
  Node,
  LinkedList,
};
