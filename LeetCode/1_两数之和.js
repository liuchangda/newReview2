var nums = [2, 7, 4, 4], target = 9;
var twoSum = function (nums, target) {
    let result = [];
    let map = new Map();
    nums.forEach(function (value, key) {
        map.set(nums[value], key);
    })
    for (let i = 0; i < nums.length; i++) {
        let anotherNum = target - nums[i];
        if (map.has(anotherNum) && map.get(anotherNum) != i) {
            result.push(map.get(anotherNum));
            break;
        }
    }
    return result;
}

twoSum();