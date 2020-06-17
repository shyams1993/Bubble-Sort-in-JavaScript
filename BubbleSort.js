let arr = [1,5,6,3,2,4,150,863,243,2435,0,7];

function bubbleSort(arr)
{
    for (let i=0; i < arr.length; i++)
    {
        for (let j =0; j < arr.length; j++)
        {
            if(arr[j] > arr[j+1])
            {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}

console.log(bubbleSort(arr));