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
