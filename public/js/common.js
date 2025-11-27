{const menu=document.querySelector('.menu-list')
const nav=document.querySelector('nav')
const menu_btn=document.querySelector('.menu-btn')
const menuList=document.querySelector('.menu-list ul')
const menuLi=document.querySelectorAll('.menu-list li')
menu_btn.addEventListener('click',()=>{const isOpen=menu_btn.getAttribute('aria-expanded')==="true"
menu_btn.setAttribute('aria-expanded',String(!isOpen))
let height=menu.getBoundingClientRect().height
if(height===0){menu.style.display='flex'
menu.style.height=nav.getBoundingClientRect().height+menuList.getBoundingClientRect().height+48+"px"
for(let i=0;i<menuLi.length;i++){setTimeout(()=>{menuLi[i].classList.add('visible')},600+(i*150))}}else{menuLi.forEach((item,i)=>{setTimeout(()=>{item.classList.remove('visible')},200+(i*150));setTimeout(()=>{menu.style.height=0},800)})}})}
{const dashed=document.querySelector('.dashed-line')
const observer=new IntersectionObserver((entries)=>{entries.forEach(entrie=>{if(entrie.isIntersecting){entrie.target.style.transform='scaleX(1)'}})},{})
observer.observe(dashed)}
{const bigHeading=document.querySelectorAll('.blur-animation')
const observer=new IntersectionObserver((entries)=>{entries.forEach(entrie=>{if(entrie.isIntersecting){entrie.target.style.filter="none"
entrie.target.style.opacity="1"}else{entrie.target.style.filter="blur(4px) "
entrie.target.style.opacity="0"}})},{})
bigHeading.forEach(item=>{observer.observe(item)})}
{const arts=document.querySelectorAll('.advantages-container article')
const observer=new IntersectionObserver((entries)=>{entries.forEach(entrie=>{if(entrie.isIntersecting){entrie.target.style.transform='translateY(0)'
entrie.target.style.opacity="1"}else{entrie.target.style.transform='translateY(32px)'
entrie.target.style.opacity="0"}})},{})
arts.forEach(item=>{observer.observe(item)})}