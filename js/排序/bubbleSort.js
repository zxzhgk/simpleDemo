function *bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for (let j=0;j<arr.length-1;j++){
            if(arr[j]<arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];   
            }
            console.log(`外圈第${i}轮----内圈第${j}轮`)
            console.log(arr);
            yield arr;
        }
    }
}
let bubble=bubbleSort([1,7,5,9]);
for(let i of bubble){

}
