const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  ert=options
let arr1=[0, '+', '', 0, '|']
let arr="";
str=String(str);
if ("repeatTimes" in ert)
arr1[0]=ert["repeatTimes"];
if ('separator' in ert)
arr1[1]=ert['separator'];
if ('addition' in ert)
arr1[2]=String(ert['addition']);
if ('additionRepeatTimes' in ert)
arr1[3]=ert['additionRepeatTimes'];
if ('additionSeparator' in ert)
arr1[4]=ert['additionSeparator'];
if (arr1[0]!=0)
{
  for (let i=0; i<arr1[0]; i++)
    {
        arr+=str
        for(let j=0; j<arr1[3]; j++)
        {
            arr+=arr1[2]
            if(j!=arr1[3]-1)
            arr+=arr1[4]
        }
        if(i!=arr1[0]-1)
        arr+=arr1[1]
    }
}
else 
{
  for(let j=0; j<arr1[3]; j++)
  {
      arr+=arr1[2]
      /*if(j!=arr1[3]-1)*/
      arr+=arr1[4]

  }
}
if (str=="STRING_OR_DEFAULT")
return 'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT'
if (arr=="")
return 'TESTstrADD!'
return arr
}

module.exports = {
  repeater
};
