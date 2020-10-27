const Student = ('./models/Student.js')

const createStudent = () => {
    const student = new Student({
        sname: 'Sushant',
        regno: 11613905,
        contact: 12345,
        active: true
    })

    student.save()
    console.log(student)
}

module.exports= {}