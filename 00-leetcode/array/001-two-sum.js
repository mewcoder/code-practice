/*
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export function twoSum(nums, target) {
  const map = new Map();
  let n1, n2;
  for (let i = 0; i < nums.length; i++) {
    n1 = nums[i];
    n2 = target - n1;
    if (map.has(n2)) return [map.get(n2), i];
    else map.set(n1, i);
  }
  return [];
}
