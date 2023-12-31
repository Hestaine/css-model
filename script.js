const margin = document.querySelector(".m0");
const border = document.querySelector(".b0");
const padding = document.querySelector(".p0");
const content = document.querySelector(".c0");
const body = document.querySelector("body");



body.addEventListener('mouseover', (e)=>{
    e.preventDefault();
    e.stopPropagation();
});
content.addEventListener('mouseover', (e)=>{
    e.preventDefault();
    e.stopPropagation();
    alert('Content area')
});
padding.addEventListener('mouseover', (e)=>{
    e.preventDefault();
    e.stopPropagation();
    alert('Padding area')
});
border.addEventListener('mouseover', (e)=>{
    e.preventDefault();
    e.stopPropagation();
    alert('Border area')
});
margin.addEventListener('mouseover', (e)=>{
    e.preventDefault();
    e.stopPropagation();
    alert('Margin area')
});
