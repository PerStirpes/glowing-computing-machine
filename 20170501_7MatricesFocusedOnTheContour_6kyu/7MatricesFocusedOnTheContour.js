function countourMode(M, a, b) {
    let contourArr = M.shift();
    for (let i=0; i<M.length; i++) {
        contourArr.push(M[i].pop());
    }
    contourArr = contourArr.concat(M.pop().reverse());
    for (let j=M.length-1; j>=0; j--){
        contourArr = contourArr.concat([M[j].shift()]);
    }

    contourArr = contourArr.filter(function(val) {
        return (val >= a && val <= b);
    });

    let obj = contourArr.reduce(function(acc,next){
        if(next in acc) {
            acc[next] += 1;
        } else {
            acc[next] = 1;
        }
        return acc;
    },{});
    
    let count = 0;
    let max = [];

    for (let keys in obj) {
        if(obj[keys] > count) {
            count = obj[keys];
        }
    }

    let sameCheck = 0;
    for (let keys in obj) {
        if(obj[keys] === count) {
            sameCheck += 1;
        }
    }
    if(sameCheck === Object.keys(obj).length) return [];

    for (let keys in obj) {
        if(obj[keys] === count) {
            max.push(+keys);
        }
    }

    function sortNumber(a,b) {
        return a - b;
    }

    max.sort(sortNumber);

    return [count, max];

}

/* best practices

Object.values = o => Object.keys(o).map( v => o[v] ) ;
const numerically = (v,w) => v-w ;
function countourMode(matrix, a, b) {
  const freq = [].concat(matrix.shift(), matrix.pop(), ...matrix.map( v => [ v[0], v.pop() ] ))
                 .filter( v => v>=a && v<=b )
                 .reduce( (acc,v) => ( acc[v] = acc[v]+1 || 1, acc ), {} );
  const maxFreq = Math.max(...Object.values(freq));
  const result = Object.keys(freq).filter( v => freq[v]===maxFreq );
  if ( result.length===Object.keys(freq).length )
    return [];
  else
    return [ maxFreq, result.map(Number).sort(numerically) ];
}

*/