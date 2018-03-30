'use strict';

const faker = require('faker')

module.exports.generatePrograms = () => {
  let programs = [];
  

  for (let i = 0; i < 15; i++) {
    let seats = Math.floor(Math.random()*25)+1;
    let name = faker.name.lastName();
    let startDate = faker.date.between('2017-12-31','2018-12-13');
    let endDate = faker.date.future('1',startDate);
    let courseCategory = Math.floor(Math.random()* 30) + 1;

    programs.push({
      "no_of_seats": seats,
      "instructor_name": name,
      "start_date": startDate,
      "end_date": endDate,
      "course_category": courseCategory  
    });
  }

  return programs;
}