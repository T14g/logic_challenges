function insertNodeAtHead(head, data) {
    let newHead = new SinglyLinkedList();
    newHead.data = data;
    newHead.next = head;
    return newHead;
}