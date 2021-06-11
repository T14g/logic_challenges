function mergeLists(head1, head2) {

    // base case 
    if(head1 === null && head2 === null) return null;
    
    //head1 is null
    if(head1 === null) return head2;
    
    //head2 
    if(head2 === null) return head1;
    
    let temp = null;

    // find the lower of two , then the next will be
    // the result of a recursive call with
    if(head1.data < head2.data){
        temp = head1;
        temp.next = mergeLists(head1.next, head2);
    }else{
        temp = head2;
        temp.next = mergeLists(head1, head2.next);
    }

    return temp;
}