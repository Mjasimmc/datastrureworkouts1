function bst(arr,val){
    let left = 0
    let right = arr.length
    let mid
    while(left < right && right !==left ){
        mid = Math.floor((right+left)/2)
        
        if(val === arr[mid]){
            return true
        }
        if(val > arr[mid]){
            left = mid+1
        }else{
            right = mid
        }
    }
    return false
}

const arr = [1,2,4,5,6,7]
console.log(bst(arr,7))