
// IIFE - Immediately Invoked Function Expression
(function ($, window, document) {

    // The $ is now locally scoped 

    // Listen for the jQuery ready event on the document
    $(function () {
        var defclr;
        $('.circle').hover(function(){
            defclr = $(this).css('color');
            $(this).css('background', '#edeaea');
            $(this).find('p').css('color', 'black');
            $(this).find('.desc').fadeIn();
        }, function(){
            $(this).css('background', 'none');
            $(this).find('p').css('color', defclr);
            $(this).find('.desc').fadeOut();
                        }
            );
        var mainx = 100,
            mainy = 100;
        var its = 1;
        var lines = [
           {
              x1: 340,
              y1: 170,
              x2: 400,
              y2: 110
          },
          {
              x1: 380,
              y1: 260,
              x2: 460,
              y2: 260
          }, 
          /*
          {
              x1: 340,
              y1: 340,
              x2: 400,
              y2: 400
          },
  
          {
              x1: 170,
              y1: 340,
              x2: 110,
              y2: 400
          }, 
          */
          {
              x1: 130,
              y1: 260,
              x2: 50,
              y2: 260
          }, 
          {
              x1: 170,
              y1: 170,
              x2: 110,
              y2: 110
          },
        

        ];

        positionLines(lines);
        lines = $('.line');
        animateLines(lines);
        // The DOM is ready!
    });

    // The rest of the code goes here!

    function positionLines(lines) {
        for (var i = 0; i < lines.length; i++) {
            DrawLine(lines[i].x1, lines[i].y1, lines[i].x2, lines[i].y2);
        }
        
    }

    function animateLines(lines) {
        lines.fadeOut(50);
        lines.each(function (i, line) {
            setTimeout(function(){$(line).fadeIn(150)}, 700 * (i + 1));
        });

    }

    function DrawLine(x1, y1, x2, y2) {

        if (y1 < y2) {
            var pom = y1;
            y1 = y2;
            y2 = pom;
            pom = x1;
            x1 = x2;
            x2 = pom;
        }

        var a = Math.abs(x1 - x2);
        var b = Math.abs(y1 - y2);
        var c;
        var sx = (x1 + x2) / 2;
        var sy = (y1 + y2) / 2;
        var width = Math.sqrt(a * a + b * b);
        var x = sx - width / 2;
        var y = sy;

        a = width / 2;

        c = Math.abs(sx - x);

        b = Math.sqrt(Math.abs(x1 - x) * Math.abs(x1 - x) + Math.abs(y1 - y) * Math.abs(y1 - y));

        var cosb = (b * b - a * a - c * c) / (2 * a * c);
        var rad = Math.acos(cosb);
        var deg = (rad * 180) / Math.PI;

        htmlns = "http://www.w3.org/1999/xhtml";
        div = document.createElementNS(htmlns, "div");
        div.setAttribute('style', 'border:3px solid white;border-radius:40%;width:' + width + 'px;height:0px;-moz-transform:rotate(' + deg + 'deg);-webkit-transform:rotate(' + deg + 'deg);position:absolute;top:' + y + 'px;left:' + x + 'px;');
        div.setAttribute('class', 'line');

        document.getElementById("wrapper").appendChild(div);

    }

}(window.jQuery, window, document));
// The global jQuery object is passed as a parameter