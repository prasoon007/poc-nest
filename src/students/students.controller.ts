import { Controller, Delete, Get, Post, Put, Body, Param } from '@nestjs/common';
import { AddStudentsDto } from './dto/add-stud.dto';
import { StudentsService } from './students.service';
import { Student } from './interfaces/student.interface';

@Controller('students')
export class StudentsController {

    constructor(private readonly studentsService: StudentsService){}
    @Get()
    findAllStudents(): Student[] {
        return this.studentsService.findAllStudents();
    }

    @Get(':email')
    findOneStudent(@Param() param): Student {
        return this.studentsService.findOneStudent(param.email)
    }

    @Post()
    addStudent(@Body() addStudentsDto: AddStudentsDto): Student {
        return this.studentsService.addStudent(addStudentsDto);
    }


    @Put(':email')
    updateStudent(@Param() param, @Body() addStudentsDto: AddStudentsDto): Student {
        return this.studentsService.updateStudent(param.email, addStudentsDto)
    }

    @Delete(':email')
    deleteStudent(@Param() param): string{
        return this.studentsService.deleteStudent(param.email);
    }
}
