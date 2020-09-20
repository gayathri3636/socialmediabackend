const { gql } = require('apollo-server-express');

module.exports = gql`
  type Query {
    allCourses: [Courses!]!
  }

  type Mutation {
    addCourse(course: Course!): Courses!
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
`;
