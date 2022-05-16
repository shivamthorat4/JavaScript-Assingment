function Merge() {
    let arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
    let n1 = arr1.length;

    let arr2 = [2, 4, 6, 8];
    let n2 = arr2.length;

    let arr3 = new Array(n1 + n2)

    let i = 0, j = 0, k = 0;

    while (i < n1 && j < n2) {
        arr3[k++] = arr1[i++];
        arr3[k++] = arr2[j++];
    }

    while (i < n1)
        arr3[k++] = arr1[i++];

    while (j < n2)
        arr3[k++] = arr2[j++];

    console.log("Array after merging :" );
    for (let i = 0; i < n1 + n2; i++)
        console.log(arr3[i] + " ");
}
