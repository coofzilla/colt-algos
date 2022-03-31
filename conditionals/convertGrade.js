function convertScoreToGradeWithPlusAndMinus(score) {
  switch (true) {
    case score > 100 || score < 0:
      return "INVALID SCORE";
    case score >= 98:
      return "A+";
    case score >= 93:
      return "A";
    case score >= 90:
      return "A-";
    case score >= 88:
      return "B+";
    case score >= 83:
      return "B";
    case score >= 80:
      return "B-";
    case score >= 78:
      return "C+";
    case score >= 73:
      return "C";
    case score >= 70:
      return "C-";
    case score >= 68:
      return "D+";
    case score >= 63:
      return "D";
    case score >= 60:
      return "D-";
    case score < 60:
      return "F";
  }
}
var output = convertScoreToGradeWithPlusAndMinus(81);
console.log(output); // --> 'A'
