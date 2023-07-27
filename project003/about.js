$(document).ready(function(){





    $(document).ready(function(){

        let i =0;
        
        let interval = setInterval(slide,2000);
        
        
        function slide() {
        
        
            i++;
                if(i==3)i=0;
            
        
        
        
                $('.text li').eq(i-1).css({'left':0}).stop().animate({'left':'100%'},800);
                $('.text li').eq(i).css({'left':'-100%'}).stop().animate({'left':'0'},800)
        
                // 현재의 위치값을 입력후 변화할 위치값을 지정해 준다.
        }
        
        
        
        
        })
        



    });
