const checkUser = async () => {
    try {
    const response = await fetch('https://the-random-shop.onrender.com/idk', {
        method: 'GET',
        credentials: 'include'
    });
    const data = await response.json();
    console.log(data)
    } catch (error) {
    console.error(error);
    }
}
export default checkUser