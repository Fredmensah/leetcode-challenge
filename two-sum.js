/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const arrayLength = nums.length;
    for (const num of nums) {
        const numIndex = nums.indexOf(num);
        let selectedIndex = 0;

        while (selectedIndex < arrayLength) {     
            const firstValue = nums[numIndex];
            const secondValue = nums[selectedIndex];
            
            if (numIndex !== selectedIndex) {
                if ((firstValue + secondValue) === target) {
                    return [numIndex , selectedIndex]; 
                }
            }

            selectedIndex++;
        }
        
    }
};
