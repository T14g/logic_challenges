function printLinkedList(head) {

    if (head.data) {
        console.log(head.data);
    }

    if (head.next) {
        printLinkedList(head.next);
    }

}