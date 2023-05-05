  export default async function handleAdd(e, wishList, setWishlist){
    const imgSrc = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[0].childNodes[0].src
    const price = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].innerHTML;
    const brand = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[1].innerHTML;
    const item = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[0].childNodes[1].innerHTML; 
    const id = Number(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.dataset.id)
    let productData
   // console.log(e.target.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[1].innerHTML)
    async function add(){
           productData = {
          'id': id,
          'price': price,
          'imgSrc': imgSrc,
          'brand': brand,
          'item': item,
    }
        try {
            const response = await fetch('/wish', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(productData)
                })
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
 }
 add()
    //addToWish(e)
    //console.log(cool)
    setWishlist([...wishList, productData])
  }