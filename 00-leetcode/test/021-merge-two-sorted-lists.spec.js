import { mergeTwoLists, mergeTwoLists2 } from "../linked-list/021-merge-two-sorted-lists";

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

describe("mergeTwoLists", () => {
  test("case 1", () => {
    const l3 = new ListNode(4);
    const l2 = new ListNode(2, l3);
    const l1 = new ListNode(1, l2);

    const l6 = new ListNode(4);
    const l5 = new ListNode(3, l6);
    const l4 = new ListNode(1, l5);

    const r6 = new ListNode(4);
    const r5 = new ListNode(4, r6);
    const r4 = new ListNode(3, r5);
    const r3 = new ListNode(2, r4);
    const r2 = new ListNode(1, r3);
    const r1 = new ListNode(1, r2);
    const res = mergeTwoLists(l1, l4);
    expect(res).toEqual(r1);
  });

  test("case 2", () => {
    const res = mergeTwoLists(null, null);
    expect(res).toEqual(null);
  });

  test("case 3", () => {
    const l1 = new ListNode(0);
    const res = mergeTwoLists(null, l1);
    expect(res).toEqual(l1);
  });
});



describe("mergeTwoLists2", () => {
  test("case 1", () => {
    const l3 = new ListNode(4);
    const l2 = new ListNode(2, l3);
    const l1 = new ListNode(1, l2);

    const l6 = new ListNode(4);
    const l5 = new ListNode(3, l6);
    const l4 = new ListNode(1, l5);

    const r6 = new ListNode(4);
    const r5 = new ListNode(4, r6);
    const r4 = new ListNode(3, r5);
    const r3 = new ListNode(2, r4);
    const r2 = new ListNode(1, r3);
    const r1 = new ListNode(1, r2);
    const res = mergeTwoLists2(l1, l4);
    expect(res).toEqual(r1);
  });

  test("case 2", () => {
    const res = mergeTwoLists2(null, null);
    expect(res).toEqual(null);
  });

  test("case 3", () => {
    const l1 = new ListNode(0);
    const res = mergeTwoLists2(null, l1);
    expect(res).toEqual(l1);
  });
});
