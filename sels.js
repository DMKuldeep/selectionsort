function selectionSort(arr){
    for(i=0;i<arr.length-1;i++){
        let minIndex =i;

        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;

            }
        }
        const temp=arr[i];
        arr[i]=arr[minIndex];
        arr[minIndex]= temp;
    }
    return arr;

}
console.log(selectionSort([1,2222,33,5555,6777,7,7,543,3222,6778]));