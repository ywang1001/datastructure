function ListNode(val) {
    this.val = val;
    this.next = null
}

function mergeT(l1, l2) {
    if(!l1 && !l2) {
        return null;
    }
    if(!l2 || !l2) {
        return !l1 ? l2 : l1;
    }
    let dummy = new ListNode(0);
    let cur = dummy;
    while(l1 !== null && l2 !== null) {
        if(l1.val <= l2.val) {
            cur.next = l1;
            l1 = l1.next;
        }else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    
    if(l1 !== null) {
        cur.next = l1;
    }
    if(l2 !== null) {
        cur.next = l2;
    }
    return dummy.next;
}

let l1 = new ListNode(0);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);
let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(5);

let res = mergeT(l1, l2);
let tp = res;
console.log(tp.val);
while(tp && tp !== null) {
    console.log(tp.val+',');
    tp = tp.next
}
//merge k sorted list
var mergeKLists = function(lists) {
    if(lists === null || lists.length === 0) {
        return null;
    }
    return helper(lists, 0, lists.length-1);
};

function helper(lists, left, right) {
    if(left > right) {
        return null;
    }else if(left === right) {
        return lists[left];
    }else if(left + 1 === right) {
        console.log('sb');
        return mergeTwo(lists[left], lists[right]);
    }
    let m = left + Math.floor((right - left)/2);
    console.log(left, m, right);
    let lh = helper(lists, left, m);
    let rh = helper(lists, m+1, right);
    return mergeTwo(lh, rh);
}

function mergeTwo(l1, l2) {
    if(!l1 || !l2) {
        return !l1 ? l2 : l1;
    }
    let dummy = new ListNode(0);
    let cur = dummy;
    while(l1 && l2) {
        if(l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        }else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    
    if(l1) {
        cur.next = l1;
    }
    if(l2) {
        cur.next = l2;
    }
    return dummy.next;
}
