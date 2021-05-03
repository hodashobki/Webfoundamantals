function sigma(d){
    var sum=0;
    for(var i=0;i<=d;i++)
    sum+=i;
    return sum;
}
console.log(sigma(3));


//factorial
function factorial(num){
    var multi=1;
    for(var i=1;i<=num;i++){
        multi*=i;
        
    }
    return multi;
}
console.log(factorial(3));


//fibonachi
function fibo(x){
    var fib;
    var n1=0;
    var n2=1;
    for(var i=1;i<=x;i++){
        fib=n1+n2;
        n1=n2;
        n2=fib;
    }
    return fib;
}
console.log(fibo(3));

//array
function stl(arr){
    if(arr.length<2){
        return null;
        
    }
    else
    return arr[arr.length-2];
}
console.log(stl([2,5,6,8,4,7]));


//Array nth
function nth(arr,n){
    if(arr.length<n){
    return null;
}
else
return arr[arr.length-n];

}
console.log(nth([1,2,6,8,4,6,1,0,4],5));


//function second

    
function secondt(arr){
    var max=arr[0];
    for(var i=1;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
            var temp=arr[arr.length];
            arr[arr.length]=arr[i];
            arr[i]=temp;
            arr.pop();
        }
        }
        var max1=arr[0];
        for(var i=1;i<arr.length;i++)
        {
            if(max1<arr[i]){
                max1=arr[i];
            
            }
            
        }
        if(arr.length<2){
            return null;
        }
    
    return max1;
    }
    console.log(secondt([2,5,4,8,7]));
    

    //double

    function double(arr){
        var narr=[];
        for(var i=0;i<arr.length;i++){
         narr.push(arr[i]);
         narr.push(arr[i]);
        }
        return narr;
    }
    console.log(double([2,5,8]));


    //double
    function double(arr){
        var temp=[];
        for(var i=0;i<arr.length;i++){
        temp.push(arr[i]);
        }
         for(var i=0,j=0;i<temp.length;i++,j=j+2){
          arr[j]=temp[i];
          arr[j+1]=temp[i];
 
         }
         return arr;
     }
     console.log(double([2,5,8]));