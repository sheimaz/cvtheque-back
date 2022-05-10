import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProjectService } from './project.service';


// http://localhost:3000/projects
@Controller('projects')
export class ProjectController {


    constructor(private projectService: ProjectService) {}

    // http GET verb
    @Get()
    getAllProjects() {
      // console.log(this.projectService.getAllProjects());
      return this.projectService.getAllProjects();
    }
    
   // http POST verb
    @Post()
    createNewProjdect(@Body() data) {
      const {title, description, date} = data;
  
      return this.projectService.createProject(title, description, date);
    }


}
