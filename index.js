/* ---------ABOUT SKILL--------- */
let c=document.getElementsByClassName('ctn')
let f= document.getElementById('frame')

for(let i of c){
    i.addEventListener('click',()=>{
        // console.log(i.innerText)
        if(i.innerText == 'Education'){
            f.style.transform = 'translate(0px)'
        }else if(i.innerText == 'Experience'){
            f.style.transform = 'translate(-400px)'
        }
        
    })
}
/* ---------CONTACT FORM--------- */
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzkp123Blibux49C5vBcYO0TCieJ6OTlUEnE320E4YEev6iPvxmXmGbyQwuKXrxRQYjrw/exec'
  const form = document.forms['submit-to-google-sheet']
  const spp = document.getElementById("spp")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
         spp.innerHTML = `Message sent successfully <i class="fa-solid fa-square-check" style="color: #39a3f3;"></i>`
      setTimeout(function(){
        spp.innerHTML = ""
      },5000)
     form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })
/* ---------PAGE SCROLL EFFECT--------- */
  let h1=document.getElementById('head2')

document.addEventListener('scroll',(e)=>{
    let y = window.scrollY
    console.log(y);
    if(y>200){
        h1.classList.add('animate__animated')
        h1.classList.add('animate__fadeInUp')
    }
})

let h2=document.getElementById('head3')

document.addEventListener('scroll',(e)=>{
    let y = window.scrollY
    console.log(y);
    if(y>=900){
        h2.classList.add('animate__animated')
        h2.classList.add('animate__fadeInUp')
    }
})

let h3=document.getElementById('head4')

document.addEventListener('scroll',(e)=>{
    let y = window.scrollY
    console.log(y);
    if(y>1500){
        h3.classList.add('animate__animated')
        h3.classList.add('animate__fadeInUp')
    }
})

let h4=document.getElementById('head5')

document.addEventListener('scroll',(e)=>{
    let y = window.scrollY
    console.log(y);
    if(y>2200){
        h4.classList.add('animate__animated')
        h4.classList.add('animate__fadeInUp')
    }
})
/* ---------NAVIGATION BAR--------- */
const hamburger = document.querySelector('.sand i'); // the icon
const navMenu = document.querySelector('.navbtn'); // the menu

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // show/hide menu

    if (hamburger.classList.contains('fa-bars')) {
        hamburger.classList.remove('fa-bars');
        hamburger.classList.add('fa-x');
    } else {
        hamburger.classList.remove('fa-x');
        hamburger.classList.add('fa-bars');
    }
});


