function reverse(llist) {
    let values = [];
    let current = llist;
    
    while(current){
        values.push(current);
        current = current.next;
    }
    
    values.reverse();
    
    for(let i = 0 ; i < values.length; i++){
        if(i < values.length -1){
            values[i].next = values[i+1];
        }else{
            values[i].next = null;
        }
    }
    
    return values[0];

}