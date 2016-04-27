var message = '';
var student;

function print(message) {
  document.write("<section>" + message + "</section>");
}

for (var i = 0; i < students.length; i++) {
  student = students[i];
  console.log(student);
  message += '<h2>' + "Name: " + student.name + '</h2>';
  message += '<p>' + "Track: " + student.track + '</p>';
  message += '<p>' + "Achievements: " + student.achievements + '</p>';
  message += '<p>' + "Points: " + student.points + '</p>';
}

print(message);
