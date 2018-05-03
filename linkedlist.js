/* check if the linked list has any cycle */

function Node(value) {
    this.value = value;
    this.next = null;
    // this.visited = false;
  }

let head = new Node(2);
let tail = head;
for (let i = 0; i < 3; i++) {
    let temp = new Node(Math.floor(Math.random()*10));
    temp.next = head;
    head = temp;
}
// tail.next = head.next;


function checkLL(node) {
    if (node.next === null) {
        return 'no cycle';
    }

    if (node.next.visited) {
        return 'cycle';
    }

    node.visited = true;

    return checkLL(node.next);
}

checkLL(head);




/* if you cannot keep track of the 'visited', how can you check cycle? */

function checkLLcycle(head) {
    let slow = new Node();
    let fast = new Node();
    slow = fast = head;
    
    while (fast !== null && fast.next !== null) {
      slow = slow.next;  
      fast = fast.next.next;
      
      if (slow === fast) {
        return true;
      }
    }
    
    return false;
}

checkLLcycle(head);


// different while loop:
function checkLLcycle2(head) {
  let slow = new Node();
  let fast = new Node();
  slow = fast = head;
  
  while (true) {
    slow = slow.next;
    
    if (fast.next !== null) {
      fast = fast.next.next;
    }
    
    // what if 'fast.next === null' and 'fast !== null'?
    // current fast is the tail.
    // fast doesn't get reassigned, while 'slow = slow.next'.
    // fast will stay there and wait for slow to move to the tail.
    if (slow === null || fast === null) {
      return false;
    }
    
    if (slow === fast) {
      return true;
    }
  }
}

checkLLcycle2(head);
