export default function addToWish(e){
    const imgSrc = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[0].childNodes[0].src
    const price = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].innerHTML;
    const brand = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[1].innerHTML;
    const item = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[0].childNodes[1].innerHTML; 
 }