let sections = document.querySelectorAll('section');
window.onscroll = () => {
    sections.forEach(sec => {
        let  top    = window.scrollY;
        let  offset = sec.offset;  
        let  height = sec.offsetHeight;

        if(top >= offset && top < offset + height ){
            sec.classList.add('show.aminate');
        }
        else{
            sec.classList.remove('show.aminate');
        }
    })
}