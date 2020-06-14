const Habit=require('../models/habit_schema');
module.exports.home= function(req,res){

    Habit.find({},function(err,habits){
        return res.render('Home',{
            title:'Home Page',
            habit:habits
        });
    });

}

module.exports.form=function(req,res){
    return res.render('habit-form',{
        title:'Form'
    });
}

module.exports.create=function(req,res){
    console.log(req.body);
    Habit.create({
        name:req.body.name,
        time:req.body.time,
        day:req.body.day,
        best:req.body.best,
        number:req.body.number
    },function(err,habit){
        if(err){
            console.log('error',err);
            return;
        }

        return res.redirect('/');
    });
}

