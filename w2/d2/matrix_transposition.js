const transpose2= function (matrix){
  let arr=[];
  let rLength=matrix[0].length; 
  // console.log('clength'+cLength);
  let cLength= matrix.length;
  for(let i=0;i<rLength;i++){
    arr.push([])
    for(let j=0;j<cLength;j++){
      arr[i].push(matrix[j][i])
    }
  }
  return arr;
  }


// Do not edit this function.
const printMatrix = (matrix) => {
for (const row of matrix) {
  for (const el of row) {
    process.stdout.write(el + " ");
  }
  process.stdout.write('\n')
}
}


printMatrix(transpose2([
[1, 2, 3, 4],
[1, 2, 3, 4],
[1, 2, 3, 4],
[1, 2, 3, 4]
]));

console.log('----')

printMatrix(transpose2([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----')

printMatrix(transpose2([
[1, 2, 3, 4, 5, 6, 7]
]));