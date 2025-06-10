
/*
    Event Routes
    /api/events

*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');

// todas tienen que pasar por la validaión del JWT
router.use( validarJWT );

// obtener eventos
router.get('/', getEventos);

// crear un nuevo evento
router.post(
    '/',
    [
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'Fecha de finalización es obligatoria').custom( isDate ),

        validarCampos
    ], crearEvento
);

// actualizar evento
router.put('/:id', actualizarEvento);


// borrar evento
router.delete('/:id', eliminarEvento);


module.exports = router;

