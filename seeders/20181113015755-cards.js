'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('allCards', [
      { id: 1, number: 1,color: 'Red'},
      { id: 2, number: 2,color: 'Red'},
      { id: 3, number: 3,color: 'Red'},
      { id: 4, number: 4,color: 'Red'},
      { id: 5, number: 5,color: 'Red'},
      { id: 6, number: 6,color: 'Red'},
      { id: 7, number: 7,color: 'Red'},
      { id: 8, number: 8,color: 'Red'},
      { id: 9, number: 9,color: 'Red'},
      { id: 10, number: 10,color: 'Red'},
      { id: 11, number: 11,color: 'Red'},
      { id: 12, number: 12,color: 'Red'},
      { id: 13, number: 1,color: 'Yellow'},
      { id: 14, number: 2,color: 'Yellow'},
      { id: 15, number: 3,color: 'Yellow'},
      { id: 16, number: 4,color: 'Yellow'},
      { id: 17, number: 5,color: 'Yellow'},
      { id: 18, number: 6,color: 'Yellow'},
      { id: 19, number: 7,color: 'Yellow'},
      { id: 20, number: 8,color: 'Yellow'},
      { id: 21, number: 9,color: 'Yellow'},
      { id: 22, number: 10,color: 'Yellow'},
      { id: 23, number: 11,color: 'Yellow'},
      { id: 24, number: 12,color: 'Yellow'},
      { id: 25, number: 1,color: 'Green'},
      { id: 26, number: 2,color: 'Green'},
      { id: 27, number: 3,color: 'Green'},
      { id: 28, number: 4,color: 'Green'},
      { id: 29, number: 5,color: 'Green'},
      { id: 30, number: 6,color: 'Green'},
      { id: 31, number: 7,color: 'Green'},
      { id: 32, number: 8,color: 'Green'},
      { id: 33, number: 9,color: 'Green'},
      { id: 34, number: 10,color: 'Green'},
      { id: 35, number: 11,color: 'Green'},
      { id: 36, number: 12,color: 'Green'},
      { id: 37, number: 1,color: 'Blue'},
      { id: 38, number: 2,color: 'Blue'},
      { id: 39, number: 3,color: 'Blue'},
      { id: 40, number: 4,color: 'Blue'},
      { id: 41, number: 5,color: 'Blue'},
      { id: 42, number: 6,color: 'Blue'},
      { id: 43, number: 7,color: 'Blue'},
      { id: 44, number: 8,color: 'Blue'},
      { id: 45, number: 9,color: 'Blue'},
      { id: 46, number: 10,color: 'Blue'},
      { id: 47, number: 11,color: 'Blue'},
      { id: 48, number: 12,color: 'Blue'},
      { id: 49, number: 0,color: 'Red'},
      { id: 50, number: 0,color: 'Yellow'},
      { id: 51, number: 0,color: 'Green'},
      { id: 52, number: 0,color: 'Blue'},
      { id: 53, number: 1,color: 'WildCard'},
      { id: 54, number: 2,color: 'WildCard'},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('allCards', null, {});
  }
};