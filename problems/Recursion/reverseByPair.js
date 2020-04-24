function ListNode(val){
   this.val = val;
   this.next = null
}

var reverseBetween = function(head) {
    if(!head || !head.next) {
        return head;
    }
    let newHead = reverseBetween(head.next.next);
    let next = head.next;
    next.next = head;
    head.next = newHead;
    return next;
}

let preHead = new ListNode(0);
preHead.next = new ListNode(1);
preHead.next.next = new ListNode(2);
preHead.next.next.next = new ListNode(3);
preHead.next.next.next.next = new ListNode(4);
let res = reverseBetween(preHead);
let cur = res;
while(cur) {
    console.log(cur.val);
    cur = cur.next;
}
