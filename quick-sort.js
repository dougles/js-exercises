function quickSort(arr, l, p) {
    if (l >= p) return;
    let index = l;
    const pivot = arr[p];
    for (let i = l; i <= p; i++) {
        if (arr[i] <= pivot) {
            const tmp = arr[index];
            arr[index] = arr[i];
            arr[i] = tmp;
            index++;
        }
    }

    quickSort(arr, l, (index-2));
    quickSort(arr, index, p);
}

const r =[1,2,34,2,1,2,3,2,11,3,34,45,65,6,778,544,6,6,87,8,67,8,4,5];
quickSort(r,0,r.length-1);

console.log(r);