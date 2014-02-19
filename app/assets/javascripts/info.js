$(document).ready(function(){
        $('img').click(function (){
               console.log($(this).attr('class'));
            if ($(this).attr('class') == "thumb"){
                 $(this).attr('class', 'large');  
            }
            else {$(this).attr('class', 'thumb')};
        });
});