// const d1 = Image ()
// const d2
// const d3
// const d4
// const d5
// const d6
// const d7
// const d8
// const d9
// const d10
// const d11
// const d12
// const d13
// const d14
// const d15
// const d16
// const d17
// const d18
// const d20
// const d21
// const d22
// const d23
// const d24
// const d25

window.onload = function(){
    let buttons = document.querySelectorAll('.look1');
 
    buttons.forEach(function(btn){
        btn.addEventListener('click', function(){
            document.getElementById('open_img').innerHTML = '';
 
            let link = this.getAttribute('data-img');
            let img = document.createElement('img');
 
            img.src = link;
 
            document.getElementById('open_img').append(img);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    })
}