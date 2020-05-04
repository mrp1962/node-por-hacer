const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};


const argv = require('yargs')
    .command('Crear', 'Crea un archivo .txr', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea a hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado de la tarea', {
        descripcion: {
            demand: true,
            alias: 'a',
            desc: 'Descripcion de la tarea a hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marcar como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'Borra una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea a Borrar'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}