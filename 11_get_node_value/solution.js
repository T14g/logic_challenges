function getNode(llist, positionFromTail) {
    let lista = [];
    let head = llist;
    
    while(head){
        lista.unshift(head.data);
        head = head.next;
    }

    return lista[positionFromTail];
}
