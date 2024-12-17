let doubleArray = document.querySelector("body > pre").textContent.split('\n').map(e=>e.split('   '))
let sum = 0

doubleArray.pop();
let a = doubleArray.map(e=>(+e[0])).sort()
let b = doubleArray.map(e=>(+e[1])).sort()

for (let i = 0; i < 1000; i++)
    sum += (Math.abs(a[i] - b[i]))

console.log(sum) 
