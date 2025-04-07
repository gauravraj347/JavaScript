const myNums = [35,6,7,8,5,3,56]

const a = myNums.map((nums)=> {return nums*10}).map((nums)=> nums+1).filter((nums)=>nums>=100)
console.log(a)