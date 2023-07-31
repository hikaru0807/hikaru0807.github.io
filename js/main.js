function janken(you) {

    let rand=Math.random()*100;
    rand=Math.floor(rand%3);
    com=rand
    console.log(rand)


  
    let message = '';

    if (you === 1){
        if(com===0){
            message='相手はグー：あいこだよ'
        }
        else if (com === 1){
             message = '相手はチョキ：あなたの勝ち！';
        }else if (com ===2){
            message = '相手はパー：あなたの負け';
        } 
      }  
     
     
     if (you === 2){
        if(com===0){
            message='相手はグー：あなたの負け'
        }
        else if (com === 1){
             message = '相手はチョキ：あいこだよ';
        }else if (com ===2){
            message = '相手はパー：あなたの勝ち！';
        } 
      }     
     
     if (you === 3){
        if(com===0){
            message='相手はグー：あなたの勝ち！'
        }
        else if (com === 1){
             message = '相手はチョキ：あなたの負け';
        }else if (com ===2){
            message = '相手はパー：あいこだよ';
        } 
      }     





    
    console.log(message);


    

    
}

