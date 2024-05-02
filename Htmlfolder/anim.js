const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); //add a point in show
        } else{
            // entry.target.classList.remove('show');
        }
    })
})

const hidele = document.querySelectorAll('.hidden');
//when to observe
hidele.forEach((el)=> observer.observe(el));