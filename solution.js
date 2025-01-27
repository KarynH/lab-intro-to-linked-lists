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

 getFirst() {
  return this.head

 }

 getLast(head = this.head) {
  
    if(!head) {
      return null;
    }
    let headNode = head;
    while(headNode.next){
      headNode = headNode.next
    }
    return headNode;
 }

 search(key) {

  let node = this.head;

  while(node){
    if(node.data === key) {
      return node
    }
      node = node.next
    }

  }

 delete(data) {
  let node = this.head;
  let counter = 0;
  while (node.data !== data && node.next) {
    counter++;
    node = node.next;
  }
  let foundNode = node;
  node = this.head;
  for (let i = 1; i < counter; i++) {
    node = node.next;
  }
  node.next = foundNode.next;
}

  isEmpty() {
    return this.head === null ? true : false;
  }

  clear() {
    return this.head = null; 

  }

  toArray(){

    function ifEmpty() {

      if(head === null) {
        return []
      }
    }
    
    let arr = [];
    let currentNode = this.head;
    while(currentNode) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return arr;
  }

  getKth(k) {
    let node = this.head;
    let position = 1;
  
    while (node && position < k) {
      node = node.next;
      position++;
    }
  
    if (position === k && node) {
      return node;
    } else {
      return null; 
    }
  


  }



  containsDuplicates() {

    const foundValue = new Set();
    let node = this.head;

    while(node) {
      if(foundValue.has(node.data)){
        return true
      }else {
        foundValue.add(node.data) 
        node = node.next;
      }
    }
    return false
  }

  getKthToLast(k) {
    
   let length = 0
   let node = this.head
   while(node){
    length++
    node = node.next
   }

const position = length - k

node = this.head;
for(let i = 1; i < position; i++){
  node = node.next
}
return node
  }



}




module.exports = {
  Node,
  LinkedList,
};
