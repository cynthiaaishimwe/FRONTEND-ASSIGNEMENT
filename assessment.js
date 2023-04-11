// Write a function that takes in a string and returns it when reversed

//  let food = “eating”
   

//  Write a function that takes in the following array and consoles the target if it is found else
//  null

      let num = [2,8,0,23,5,45,76]
        Target = 23

         function mergedSorted(num){
           if (num.length <= 1) {
             return num;
           } 
              const middle = Math.floor(num.length / 2);
                const left = mergedSorted(num.slice(0, middle));
                const right = mergedSorted(num.slice(middle));
             
                return mergedSorted(leftIndex, rightIndex);
            }
            
        
             function mergedSorted(left,right){
              let result = [];
              let a = 0;
              let b = 0;
          
              while(a < left.length && b <right.length){
              if (left (a) < right [b]){
              result.push(left[a]);
              a++;
          
            }else{
              result.push(right[b]);
              b++
            }
             
          }
          return result.concat(left.slice(a)).concat(right.slice(b)); 
          } 
          console.log(num)
          
          // Write a function that takes in an array of strings and returns an array with every element
          // turned into a number

          // let nums = [“10”,”24”,”45”,”56”,”67”]
          let nums = ["10","24","25","56","67"]
         
           function ArrayNums(nums){
                nums.convertToNumber();
                nums.map();
           }
           console.log(nums)
           
  
          