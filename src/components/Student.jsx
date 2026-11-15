function Student() {
  const students = [
    { id: 1, name: 'Likhitha', course: 'React JS', year: '2026' },
    { id: 2, name: 'Priya', course: 'JavaScript', year: '2026' },
    { id: 3, name: 'Rahul', course: 'Python', year: '2026' },
    { id: 4, name: 'Kiran', course: 'Java', year: '2026' }
  ];

  return (
    <div className="page">
      <h1>Student List</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Year</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Student;