function procesarV(operacion){
    let mensaje = document.vigenere.mess.value;
    let key = document.vigenere.llave.value;
    let cifer = "";
    let dic = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    if(mensaje == ""){
        Swal.fire({
            icon: 'error',
            title: 'Falta data hermano',
            text: 'No hermano, te falto el mensaje pai',
        });
    }else if(key == ""){
        Swal.fire({
            icon: 'error',
            title: 'Falta data hermano',
            text: 'No hermano, te falto la clave pai',
        });
    }else{
        let j = 0;

        for(let i=0;i<mensaje.length;i++){
            if(mensaje[i] == " "){
                cifer += " ";
            }else{
                if(operacion == "c"){
                    cifer += dic[(dic.indexOf(mensaje[i]) + dic.indexOf(key[j])) % 26];
                }else if(operacion == "d"){
                    cifer += dic[(dic.indexOf(mensaje[i]) - dic.indexOf(key[j])) % 26];
                }
                j++;
                if(j == key.length) j = 0;
            }
        }
        document.vigenere.rs.value = cifer;
    }

    return false;
}