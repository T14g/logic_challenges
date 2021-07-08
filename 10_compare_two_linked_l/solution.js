function CompareLists(llist1, llist2) {
    let head1 = llist1;
    let head2 = llist2;

    while (head1 !== null && head2 !== null) {
        if (head1.data === head2.data) {
            head1 = head1.next;
            head2 = head2.next;
        } else {
            return 0;
        }
    }

    if (head1 === null && head2 === null) {
        return 1;
    } else {
        return 0;
    }
}