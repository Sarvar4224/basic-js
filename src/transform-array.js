const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
      newArr=[];
      if (!Array.isArray(arr))
      throw new Error ("'arr' parameter must be an instance of the Array!"); 
      for (let i=0, j=i; i<arr.length, j<arr.length; i++, j++)
      {
        newArr.push(arr[i])
        /*if(arr[i]==undefined)
        return "'arr' parametr must be an instance of the Array"*/
        if (arr[i]==="--discard-next")
        {
          if(i==arr.length-1)
          newArr.splice(i, 1)
          else
          {
           
            newArr.splice(i,1);
            i=i+1;
            continue;

          }
        }
        if (arr[i]==="--discard-prev")
        {
          if(i==0)
          newArr.splice(i,1)
          else 
          newArr.splice(i-1, 2)
        }
        if (newArr[i]==="--double-next")
        { 
          if (i==newArr.length-1)
          newArr.splice(i, 1);
          else
          newArr[i]=arr[i+1];
        }
        if (newArr[i]==="--double-prev")
        {
          if (i==0)
          newArr.splice(i, 1);
          else
          newArr[i]=arr[i-1];
        }
      }
      for(let i=0; i<newArr.length; i++)
      {
        if(newArr[i]==undefined)
        {
          newArr.splice(i, 2)
        }
      }
      return newArr;
}

module.exports = {
  transform
};
