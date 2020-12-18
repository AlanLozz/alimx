const router = require('express').Router();
const ctrl = require('../controller/index');

router.post('/',ctrl.save);
router.get('/get',ctrl.getAll);
router.get('/dropAll',ctrl.dropAll);

module.exports = router;