let _arr=[];
function sort(num){
    if(_arr[num]){
        _arr[num]=_arr[num]+1
    }else{
        _arr[num]=1;
    }
}
sort(5);
sort(1);
sort(5);
sort(4);
sort(4);
sort(4);
sort(2);
sort(3);
sort(3000);
console.log(_arr)
let arr=[];
for(let i=0;i<_arr.length;i++){
    if(_arr[i] && _arr[i]>0){
        for(j=0;j<_arr[i];j++){
            arr.unshift(i);
        }
    }
}
console.log(arr)



