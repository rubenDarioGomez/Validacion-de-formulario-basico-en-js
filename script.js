alert('hola mundo');
// var letra = prompt('escribes');
const validate = () => {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;

    if (!name || !age || !phone || !address) {
        alert('Campos vacios!!!')
        return false;
    } else{
        prompt('¿que deseas?');
    }

}