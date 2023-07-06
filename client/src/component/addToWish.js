export default  function addToWish(e){

    const imgSrc = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[0].childNodes[0].src
    const price = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].innerHTML;
    const brand = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[1].innerHTML;
    const item = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[0].childNodes[1].innerHTML; 
    const id = Number(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.dataset.id)
   // console.log(e.target.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[1].innerHTML)
    async function add(){
        try {
            const response = await fetch('https://the-random-shop.onrender.com/wish', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    'id': id,
                    'price': price,
                    'imgSrc': imgSrc,
                    'brand': brand,
                    'item': item,
                })
                })
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
     add()
 }