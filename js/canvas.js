var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext("2d");


// rectangulo 

    //RELLENO
        ctx.fillStyle = "cyan";
        //ctx.fillRect(x1,y1,x2,y2);
        ctx.fillRect(10,10,500,100);


    //CONTORNO
        ctx.lineWidth= 5;
        ctx.strokeStyle = "pink";
        ctx.rect(10,10,500,100);
        ctx.stroke();


//CIRCULO

        ctx.beginPath();
        // ctx.arc(x1, y1, r, startAngle, endAngle);
        ctx.arc(500,100,80,0,2*Math.PI);
        
        //RELLENO CIRCULO
        ctx.fillStyle = "pink";
        ctx.fill();

        //contorno
        ctx.lineWidth=5;
        ctx.strokeStyle="cyan";
        ctx.stroke();


//lineas

        ctx.beginPath();
        //ctx.moveTo(x1,y1);
        ctx.moveTo(0,100);
        //ctx.lineTo(x2,y2);
        ctx.lineTo(200,400);
        ctx.lineTo(200,200);
        ctx.lineTo(400,200);
        ctx.lineTo(500,500);
        ctx.lineTo(1000,200);
        
        //Contorno línea
        ctx.lineWidth = 5;
        ctx.stroke();
 
        //Relleno linea
           // ctx.fillStyle ='rgba(255, 50, 128, 1.0)';
            //  ctx.fill();

//CURVAS
         ctx.beginPath();

            ctx.moveTo(0,500);
            
            //ctx.bezierCurveTo(cpx1,cpy1,cpx2,cpy2,x2,y2);
            ctx.bezierCurveTo(200,300,400,400,500,500);
            
            //Contorno curva
            ctx.lineWidth = 5;
            ctx.strokeStyle ='cyan';
            ctx.stroke();
            
            //Relleno curva
            ctx.fillStyle ='pink';
            ctx.fill();

//degradado

//ctx.createLinearGradient(x1,y1,x2,y2);

var grd = ctx.createLinearGradient(0,300,100,300);
grd.addColorStop(0,"pink");
grd.addColorStop(1,"cyan");
ctx.fillStyle=grd;
ctx.fillRect(0,300,100,100);

//ctx.createRadialGradient(x1,y1,r1,x2,y2,r2);

var grd2 = ctx.createRadialGradient(890,350,5,900,400,120);
grd2.addColorStop(0,"pink");
grd2.addColorStop(1,"cyan");
ctx.beginPath();
ctx.arc(900,400,100,0,7);
ctx.fillStyle = grd2;
ctx.fill();

