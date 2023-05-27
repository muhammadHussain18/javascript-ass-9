var num= 0
document.addEventListener('keydown',function(e){
   
    if(e.keyCode === 39 ){
        var pl1 = document.getElementById('char1')
        num = num+30
        pl1.style.left = num + "px" 
        pl1.style.backgroundImage = "url(material/ryu-walkf.gif)"
        pl1.style.width = "300px"
 setTimeout(() => {
    pl1.style.backgroundImage = "url(material/ryu-ts-stance.gif)"
    pl1.style.width = "200px"
    pl1.style.height = "285px"
 }, 1000);
    }
    
})

document.addEventListener('keydown',function(e){
   
    if(e.keyCode === 37 ){
        var pl1 = document.getElementById('char1')
        num = num-30
        pl1.style.left = num + "px" 
        pl1.style.backgroundImage = "url(material/ryu-walkf.gif)"
        pl1.style.width = "300px"
 setTimeout(() => {
    pl1.style.backgroundImage = "url(material/ryu-ts-stance.gif)"
    pl1.style.width = "200px"
    pl1.style.height = "285px"
 }, 1000);
    }
    
})



document.addEventListener('keydown',function(e){
   
    if(e.keyCode === 17 ){
        var pl1 = document.getElementById('char1')
        pl1.style.backgroundImage = "url(material/ryu-redhado.gif)"
        pl1.style.width = "700px"
        pl1.style.height = "245px"
 setTimeout(() => {
    pl1.style.backgroundImage = "url(material/ryu-ts-stance.gif)"
    pl1.style.width = "200px"
    pl1.style.height = "285px"
 }, 1000);
    }
    
})


document.addEventListener('keydown',function(e){
   
    if(e.keyCode === 32 ){
        var pl1 = document.getElementById('char1')
        pl1.style.backgroundImage = "url(material/ryu-hk.gif)"
        pl1.style.width = "400px"
 setTimeout(() => {
    pl1.style.backgroundImage = "url(material/ryu-ts-stance.gif)"
    pl1.style.width = "200px"
    pl1.style.height = "285px"
 }, 1000);
    }
    
})

document.addEventListener('keydown',function(e){
   
    if(e.keyCode === 40 ){
        var pl1 = document.getElementById('char1')
        pl1.style.backgroundImage = "url(material/ryu-crouch-wk.gif)"
        pl1.style.width = "393px"
        pl1.style.height = "213px"
 setTimeout(() => {
    pl1.style.backgroundImage = "url(material/ryu-ts-stance.gif)"
    pl1.style.width = "200px"
    pl1.style.height = "285px"
    
 }, 300);
    }
    
})

document.addEventListener('keydown',function(e){
   
    if(e.keyCode === 38 ){
        var pl1 = document.getElementById('char1')
        pl1.style.backgroundImage = "url(material/ryu-shoryukens.gif)"
        pl1.style.width = "303px"
        pl1.style.height = "613px"
 setTimeout(() => {
    pl1.style.backgroundImage = "url(material/ryu-ts-stance.gif)"
    pl1.style.width = "200px"
    pl1.style.height = "285px"
    
 }, 300);
    }
    
})

var num2 = 1100
document.addEventListener('keydown',function(f){
    if(f.keyCode === 68){
        var pl2 = document.getElementById('char2')
        
        num2 = num2 + 30;
        
        pl2.style.left = num2 + "px" 
        pl2.style.backgroundImage = "url(material/asra-walkb.gif)"
                pl2.style.width = "320px"
                pl2.style.height = "300px"
         setTimeout(() => {
            pl2.style.backgroundImage = "url(material/azrabc.gif)"
            pl2.style.width = "260px"
            pl2.style.height = "300px"
         }, 300);
            

    }
})

document.addEventListener('keydown',function(f){
    if(f.keyCode === 65){
        var pl2 = document.getElementById('char2')
        
        num2 = num2 - 30
        pl2.style.left = num2 + "px" 
        pl2.style.backgroundImage = "url(material/asra-walkb.gif)"
                pl2.style.width = "320px"
                pl2.style.height = "300px"
         setTimeout(() => {
            pl2.style.backgroundImage = "url(material/azrabc.gif)"
            pl2.style.width = "260px"
            pl2.style.height = "300px"
         }, 300);
            

    }
})



document.addEventListener('keydown',function(f){
   
    if(f.keyCode === 87 ){
        var pl2 = document.getElementById('char2')
        pl2.style.backgroundImage = "url(material/asra-jump.gif)"
        pl2.style.width = "380px"
        pl2.style.height = "613px"
 setTimeout(() => {
    pl2.style.backgroundImage = "url(material/azrabc.gif)"
    pl2.style.width = "260px"
    pl2.style.height = "300px"
    
 }, 300);
}
    
})

document.addEventListener('keydown',function(f){
   
    if(f.keyCode === 83 ){
        var pl2 = document.getElementById('char2')
        pl2.style.backgroundImage = "url(material/asra-clk.gif)"
        pl2.style.width = "380px"
        pl2.style.height = "213px"
 setTimeout(() => {
    pl2.style.backgroundImage = "url(material/azrabc.gif)"
    pl2.style.width = "260px"
    pl2.style.height = "300px"
    
 }, 300);
}
    
})


document.addEventListener('keydown',function(f){
   
    if(f.keyCode === 81 ){
        var pl2 = document.getElementById('char2')
        pl2.style.backgroundImage = "url(material/asra-projectile2.gif)"
        pl2.style.width = "580px"
        pl2.style.height = "413px"
 setTimeout(() => {
    pl2.style.backgroundImage = "url(material/azrabc.gif)"
    pl2.style.width = "260px"
    pl2.style.height = "300px"
    
 }, 1200);
}
    
})


document.addEventListener('keydown',function(f){
   
    if(f.keyCode === 69 ){
        var pl2 = document.getElementById('char2')
        pl2.style.backgroundImage = "url(material/asra-hk.gif)"
        pl2.style.width = "480px"
        pl2.style.height = "413px"
 setTimeout(() => {
    pl2.style.backgroundImage = "url(material/azrabc.gif)"
    pl2.style.width = "260px"
    pl2.style.height = "300px"
    
 }, 1200);
}
    
})

