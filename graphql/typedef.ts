const { gql } = require('apollo-server-express');

module.exports = gql`
  type Query {
    allCourses: [Courses!]!
    addCourseContentss: [addCourseContents!]!
    filterContent(title: String!): addCourseContents!
  }

  type Mutation {
    addCourse(course: Course!): Courses!
    addCourseContent(content: addCourseContent!): addCourseContents!
  }

  type Courses {
    _id: String!
    courseName: String!
    description: String!
  }

  input Course {
    _id: String
    courseName: String!
    description: String!
  }
  type addCourseContents {
    _id: String!
    title: String!
    courseContent: String!
  }
  input addCourseContent {
    _id: String
    title: String!
    courseContent: String!
  }
`;
