import { Injectable } from '@nestjs/common';
import { Student } from './interfaces/student.interface';

@Injectable()
export class StudentsService {
    private readonly students: Student[] = [

    ];

    findAllStudents(): Student[] {
        return this.students;
    }

    findOneStudent(email: string): Student {
        return this.students.find(student => student.email === email)
    }

    addStudent(student: Student): Student {
        this.students.push(student);
        return this.students.at(-1);
    }

    updateStudent(email: string, student: Student) {
        const foundStudent: Student = this.students.find(student => student.email === email)
        foundStudent.name = student.name;
        foundStudent.course = student.course;
        foundStudent.age = student.age;
        foundStudent.email = student.email;

        return foundStudent;
    }

    deleteStudent(email: string): string {
        const key = this.students.length;
        const vowel: Student[] = this.students.filter(student => student.email !== email);
        if (key === vowel.length) return "No student found"
        return "Student Deleted";
    }


}
