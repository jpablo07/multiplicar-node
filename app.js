//Requireds
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Genera un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;
// const fs = require('fs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// let base = '5';


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${archivo}`)).catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

// let argv2 = process.argv;
// console.log('Limite', argv.limite);
// console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// let data = '';
// for (let i = 1; i <= 10; i++) {
//     data += (`${base} * ${i} = ${base * i}\n`);
// };

// // const data = new Uint8Array(Buffer.from('Hello Node.js'));
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

// crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`)).catch(e => console.log(e));