//Node.js 10.14.0
//Plain Javascript and Node.js is supported
// html/css is not supported here 


const you = 'Nadine'
const me = 'Tiffany'
 let rand = function  rand(pnoun){
      let randomIndex =  Math.floor(Math.random()*pnoun.length); 
      let r = pnoun[randomIndex];
       return r
   }

let initloveCount = 100
let loveArray = [812,350,690,927]
 
    function LoveIterator(initloveCount, loveArray,rand) {
      
          function  rand(loveArray){
            let randomIndex=   Math.floor(Math.random()*loveArray.length); 
            let r = loveArray[randomIndex];
            return r
       }
     
                    let nloveCount=((initloveCount)*(rand(loveArray)))
        console.log(ILoveUThisMuch(you, me, nloveCount))
      return (
       
      ILoveUThisMuch(you,me,nloveCount)
     
         )  }
   
           
    function ILoveUThisMuch(you, me,loveCount ){
      let pnoun  = ['she','xe']
      let love = loveArray
 
        
     
          
        return `I love ${you} ${rand(love)}
         times more than  ${rand(pnoun)} loves me. 
         Sincerely ${me},  your loving mistress` 
}
        
           
             
           console.log(LoveIterator(loveArray,initloveCount ))   )
 
 LoveIterator(loveArray,initloveCount)
