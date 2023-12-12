const findMinimum = arr => {


  let ret=arr[0];

  for(const e of arr)
  {
    if(e<ret) ret=e;
  }

  return(ret);

  // this is linnear time complexity and constant space complexity

};

const runningSum = arr => {

  let ret=[];
  let sum=0


  for(const e of arr)
  {
    sum+=e;
    ret.push(sum);
  }
  /*
  for(let i=0;i<arr.length;i++)
  {
    sum +=arr[i];
    ret.push(sum);
  }*/

  return ret;

  // this is linnear time and linnear space sincee we are making a new memmory input for each position in the original array
};

const evenNumOfChars = arr => {

  let ret=0;

  for(const e of arr)
  {
    if(e.length%2==0) ret++;
  }

  return(ret);
  //let words = arr.split(" ");

  // You are persring you array once so linnear time. You are only changin ONE variable so constant complexity
};

const smallerThanCurr = arr => {

  let ret=[];
   for(let i=0;i<arr.length;i++)
   {

     let count =0;

    for(let j=0;j<arr.length;j++)
    {
      if(arr[i]>arr[j]) count ++;
    }

    ret.push(count);

   }

   return(ret);

  // So this is quadratic time complexity and linnear space complexity

};

const twoSum = (arr, target) => {


  for(let i=0;i<arr.length;i++)
  {
    for(let j=0;j<arr.length;j++)
    {
      if(i===j) continue;

      if(arr[i]+arr[j]==target) return true;
    }
  }

  return false

  // Once more this is quadratic time complexity and constant space complexity;
};

const secondLargest = arr => {


  if(arr.length<2) return undefined;

  let lrg=arr[0], sml = arr[0];

  for(const e of arr)
  {
    if(e>lrg) lrg = e;
    if(e<sml) sml=e;
  }

  let ret = sml;

  for(const e of arr)
  {
       if(e>ret && e<lrg) ret=e;
  }

 // if(lrg === ret) return undefined;

  return ret;

  // This is linnear time and constant space complexity
};

const shuffle = (arr) => {

  //two methods that seem to work that dont pass specs


  /*
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements at i and j
  }
  return arr;*/


  /*
  let n=arr.length;

  //let ret = arr;

  let p1=0;
  let p2=0;
 // let ph;

  for(let i=0;i<2*n;i++)
  {
    p1 = Math.floor(n*Math.random()%n);
    p2= Math.floor(n*Math.random()%n);

    if(p1===p2) continue;

    [arr[p1], arr[p2]] = [arr[p2], arr[p1]];
  }

  return arr;*/

  // This is linnear time and contant memmory assuming swaping does not take extra space to compute
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
