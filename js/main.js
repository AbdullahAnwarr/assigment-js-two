var fedback=[
    'Lorem ipsum dolor sit amet, consectetur adipis ae delectus magni enim! Blanditiis explicabo enim alias saepe?',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto corporis, suscipit ',
    'Lorem ipsum dolor sit amet, consectetur  ',
    
]
    var x =-1;
function assigment() {
    var box=Math.floor(Math.random()*fedback.length );

    while(box==x){
        box =Math.floor(Math.random()*fedback.length)
    }
    console.log(box);
    document.getElementById('one').innerHTML=fedback[box]
    x=box
}  