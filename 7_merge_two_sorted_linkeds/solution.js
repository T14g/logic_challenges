function mergeLists(head1, head2) {
    let allNumbers = [];
    let result = new SinglyLinkedList();
    
    if(head1){
        let current = head1;
        
        while(current){
            allNumbers.push(current.data);
            current = current.next;
        }
    }
    
    if(head2){
        let current = head2;
        
        while(current){
            allNumbers.push(current.data);
            current = current.next;
        }
    }
    
    allNumbers.sort();
    
    let current = result;
    for(let i = 0; i < allNumbers.length; i++){
        current.data = allNumbers[i];
        
    }
    
    
    //not done yet
    

}