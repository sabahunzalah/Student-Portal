export const academicPerformanceData = {
  labels: ["Course 1", "Course 2", "Course 3"],
  datasets: [
    {
      label: "Grades",
      data: [88, 92, 85],
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
      fill: true,
    },
  ],
};

export const assignmentsAndExamsData = {
  labels: ["Assignment 1", "Assignment 2", "Mid-term", "Final Exam"],
  datasets: [
    {
      label: "Grades",
      data: [85, 90, 75, 80],
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
      fill: true,
    },
  ],
};

export const attendanceData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Attendance",
      data: [95, 85, 90, 88],
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
      fill: true,
    },
  ],
};

export const academicPerformanceDetails = [
  { course: "Course 1", grade: 88 },
  { course: "Course 2", grade: 92 },
  { course: "Course 3", grade: 85 },
];

export const assignmentsAndExamsDetails = [
  { name: "Assignment 1", grade: 85 },
  { name: "Assignment 2", grade: 90 },
  { name: "Mid-term", grade: 75 },
  { name: "Final Exam", grade: 80 },
];

export const attendanceDetails = [
  { week: "Week 1", attendance: 95 },
  { week: "Week 2", attendance: 85 },
  { week: "Week 3", attendance: 90 },
  { week: "Week 4", attendance: 88 },
];
