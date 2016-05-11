export default function() {
  this.get('/students', function() {
    return {
      data:[{
        type: 'students',
        id: 1,
        attributes: {
	  studentid: 'R091A1',
          name: 'Wayne Rooney',
          course: 'Computer Science',
          city: 'San Francisco',
          type: 'Full-Time',
          gpa: 3.6,
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
        }
      }, {
        type: 'students',
        id: 2,
        attributes: {
	  studentid: 'R081B1',
          name: 'Christiano Ronaldo',
          course: 'Mechanical Engineering',
          city: 'Seattle',
          type: 'Part-Time',
          gpa: 3.8,
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
        }
      }, {
        type: 'students',
        id: 3,
        attributes: {
	  studentid: 'A042D3',
          name: 'Lionel Messi',
          course: 'Political Sciences',
          city: 'Portland',
          type: 'Full-Time',
          gpa: 4.0,
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
        }
      }]
    };
  });
}
