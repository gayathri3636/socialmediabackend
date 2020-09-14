const models=  require('../models/course');

module.exports = {
    Query:{
        allCourses: async () => {
            try{
                const allCourses = await models.find();
                return allCourses;
            } catch(err){
                return{
                    message:err
                }
            }
        }
    },

    Mutation:{
        addCourse: async(temp, {course}) => {
            try{
                console.log("req", course)

                const{
                    courseName,
                    description
                } = course;

                const add = new models({
                    courseName,
                    description
                });
                await add.save();
                return add;
            } catch(err){
                return{
                    message:err
                }
            }
        }
    }
}