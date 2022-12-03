let listImage = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg',]
let img = document.querySelector('img')
let ind = 0
setInterval(()=>{
    img.src = listImage[ind]
    ind++
    if(ind == 6){
        ind = 0
    }
},3000)