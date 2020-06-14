const express=require('express');

const router = express.Router();

const homeController=require('../controllers/home_controller');

router.get('/',homeController.home);
router.get('/habit-form',homeController.form);
router.post('/submit-form',homeController.create);


module.exports=router;