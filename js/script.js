let counterAll = document.querySelectorAll('.counter');
let convertarray = Array.from(counterAll);


convertarray.map(function(item){
    
    let countNumberStop = item.innerHTML;
    
    let count = 0;

    function counterUp() {
        item.innerHTML = count + ' + ';
        
        count = count+1; 
        

        if(count > countNumberStop){
            clearInterval(stop);
        }
    }

    let stop = setInterval(function(){
        counterUp();
    },50);
    
})


     
