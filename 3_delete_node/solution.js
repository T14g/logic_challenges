function deleteNode(head, position) {
    let current = head;
    let i = 1;
    
    if(position == 0){
        return head.next;
    }
    
    while(current){
        if(position === i){
            // Skip one if not on the last element
            current.next = current.next ? current.next.next : current.next;
            return head;
        }
        current = current.next;
        i++;
    }
    return head;
    
}