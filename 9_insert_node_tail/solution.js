function insertNodeAtTail(head, data) {
    
    let newNode = new SinglyLinkedListNode();
    newNode.data = data;
    newNode.next = null;
       
   if(!head){
       return newNode;
       
   }else{
       
       let current = head;
       
       while(current.next !== null){
           current = current.next;
       }
       
       current.next = newNode;
       
       return head;
   }
}