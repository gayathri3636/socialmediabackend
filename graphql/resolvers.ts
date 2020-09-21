const models = require('../models/course');
const contentmodel = require('../models/addCourseContent');

module.exports = {
  Query: {
    allCourses: async () => {
      try {
        const allCourses = await models.find();
        return allCourses;
      } catch (err) {
        return {
          message: err,
        };
      }
    },
    addCourseContentss: async () => {
      try {
        const allCoursesContent = await contentmodel.find();
        return allCoursesContent;
      } catch (err) {
        return {
          message: err,
        };
      }
    },
    filterContent: async (temp, { title }) => {
      try {
        const allCoursesContent = await contentmodel.findOne({ title: title });
        return allCoursesContent;
      } catch (err) {
        return {
          message: err,
        };
      }
    },
  },

  Mutation: {
    addCourse: async (temp, { course }) => {
      try {
        console.log('req', course);

        const { courseName, description } = course;

        const add = new models({
          courseName,
          description,
        });
        await add.save();
        return add;
      } catch (err) {
        return {
          message: err,
        };
      }
    },
    addCourseContent: async (temp, { content }) => {
      try {
        console.log('req', content);

        const { courseContent, title } = content;

        const addContent = new contentmodel({
          title,

          courseContent,
        });
        await addContent.save();
        console.log('addContent', addContent);
        return addContent;
      } catch (err) {
        return {
          message: err,
        };
      }
    },
  },
};
