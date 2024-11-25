// Crear una función llamada presentarme, dentro crear una variable y asignarle su nombre,  crear una constante y asignarle su edad, luego imprimir en consola: Hola, soy ____ y tengo ____ años.

function presentarme() {
    let miNombre = "Manuela";
    const miEdad = 20;
    //console.log(`Hola, soy ${miNombre} y tengo ${miEdad} años`);
    } 
    presentarme();
    
    //3. Crear una función que reciba un nombre y edad por parámetros, luego imprimir en consola: Hola, soy ____ y tengo ____ años.
    
    function presentacion(nombre, edad) {
    //console.log(`Hola, soy ${nombre} y tengo ${edad} años`);
    }
    presentacion("Pablo", 23);
    
    //4. Crear una función que reciba un nombre, un apellido y una edad por parámetros, la función debe imprimir en consola: Su nombre es ____ y usted tiene ____ años, si no se recibe la edad imprimir: Su nombre es ____ y usted tiene 100 años.
    
    function presentar(nombre, apellido, edad = 100) {
    //console.log(`Su nombre es ${nombre} ${apellido} y usted tiene ${edad} años.`);
    }
    presentar('Gabriel', 'Lopez', 19);
    presentar('Gabriel', 'Lopez');
    
    //5. Crear una función que reciba dos párametros, un nombre y un apellido y retorne el nombre completo, primero el apellido y luego el nombre.
    
    function presentate(nombre, apellido) {
        return `${apellido} ${nombre}`;
    }
    
    let nombreCompanero = presentarse('Alvaro', 'Bahos');
    let nombreCompleto = presentarse('Manuela', 'Alvarez');
    //console.log(nombreCompleto);
    //console.log(nombreCompanero);
    
    //6. Crear una función que reciba cuatro párametros, un nombre, una prenda, un color y una cantidad y retorne: ____ tiene __ ____ de color ____. Ej entrada: pepita, camisas, azul, 2 Ej salida: Pepita tiene 2 camisas de color azul.
    
    function ejemplo(nombre, prenda, color, cantidad) {
    return `${nombre} tiene ${cantidad} ${prenda} de color ${color}.`;
    }
    
    let ejemplo1 = ejemplo('Pepita', 'camisas', 'azul', 2);
    let ejemplo2 = ejemplo('Gabriel', 'sacos', 'verde', 4);
    //console.log(ejemplo1);
    //console.log(ejemplo2);
    
    //7. Crear una función para saludar, si la función recibe un nombre, imprimir por consola: Hola, ____! Si la función no recibe un nombre, imprimir: Hola, desconocido!
    
    function saludar(nombre = 'desconocido') {
    //console.log(`Hola, ${nombre}!`);
    }
    saludar('Gabriel');
    saludar();
    
    
    
    // OPERADORES
    
    //8. Crear cinco funciones, (sumar, restar, multiplicar, dividir, módulo), deberecibir 2 números e imprimir el resultado así:Ej entrada: 8, 4 Ej salida: 8 + 4 = 12
    
    function sumar(numero1, numero2) {
    //console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
    }
    sumar(8, 4);
    sumar(100, 5);
    
    
    function restar(numero1, numero2) {
    //console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
    }
    restar(8, 4);
    restar(100, 5);
    
    function multiplicar(numero1, numero2) {
    //console.log(`${numero1} x ${numero2} = ${numero1 * numero2}`);
    }
    multiplicar(8, 4);
    multiplicar(100, 5);
    
    function dividir(numero1, numero2) {
    //console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
    }
    dividir(8, 4);
    dividir(100, 5);
    
    function modulo(numero1, numero2) {
    //console.log(`${numero1} % ${numero2} = ${numero1 % numero2}`);
    }
    modulo(8, 4);
    modulo(100, 5);
    
    function potencia(numero1, numero2) {
    // console.log(`${numero1} ^ ${numero2} = ${numero1 ** numero2}`)
    }
    potencia(8, 4);
    potencia(100, 5);
    


