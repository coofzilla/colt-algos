//i temporary workers

//o schedule f/nighttime call center
//find fewest number of workers that meet minimum requirements
//cannot have more than 4 extra workers above min requirements in a single day

//CONSTRAINTS
// 8~10 cannot work on weekend

//WEEKDAY REQUIREMENTS
// 8 people must work weekday
// WEEKDAY ONLY PEOPLE work 4/5 weekdays

//GENERAL EMPLOYEES
// work 4 days
// work 2 weekdays and saturday/sunday
// not allowed three consecutive days off

// weekday only or 2/2shifts can only have 6 people doing that

//Required Staff During Week
const requiredDailyStaff = {
  monday: 15,
  tuesday: 20,
  wednesday: 19,
  thursday: 22,
  friday: 7,
  saturday: 32,
  sunday: 35,
};
const anyDayStaff = 140; //totalStaff - 10;

const weekdayOnlyStaff = 10;
//divide into three shifts
// one shift tuesday off
// one shift wednesday off
// one shift thursday off

const totalStaff = (requiredDailyStaff) => {
  let sum = 0;
  for (let day in requiredDailyStaff) {
    sum += requiredDailyStaff[day];
  }
  return sum; //150 total
};
// totalStaff(requiredDailyStaff);

const calculateMinimumStaff = (requiredDailyStaff) => {
  const workers = {
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0,
    sunday: 0,
  };

  console.log(workers);
};

calculateMinimumStaff(requiredDailyStaff);

