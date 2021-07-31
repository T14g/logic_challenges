function sortedInsert(llist, data) {
    // Write your code here
    let newValue = new DoublyLinkedListNode();
    newValue.data = data;
    
    let current = llist;
    let temp;
    
    while(current.data < data){
        current = current.next;
    }
    
    newValue.next = current.next;
    newValue.prev = current;
    current.next = newValue;
    
    return llist;
}