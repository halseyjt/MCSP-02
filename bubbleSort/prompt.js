// INSTRUCTIONS
// Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

// If the first element is greater than the second element, it swaps the two.
// It then compares the second to the third, and the third to the fourth, and so on.
// In this way, the largest values ‘bubble’ to the end of the array.
// Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique.

// NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).

function bubbleSort(array) {
        let len = inputArr.length;
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < len; i++) {
                if (inputArr[i] > inputArr[i + 1]) {
                    let tmp = inputArr[i];
                    inputArr[i] = inputArr[i + 1];
                    inputArr[i + 1] = tmp;
                    swapped = true;
                }
            }
        } while (swapped);
        return inputArr;
    };

    bubbleSort([9, 4, 3, 5, 8]);

