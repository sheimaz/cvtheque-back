import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { ProjectEntity, ProjectStatus } from "../Entity/project.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProjectService {

  constructor(@InjectRepository(ProjectEntity) private repo: Repository<ProjectEntity>) {
  }


  async getAllProjects() {
    return await this.repo.find();
  }

  async createProject(title: string, description: string, date: string){
    const project = new ProjectEntity();
    project.title = title;
    project.description = description;
    project.date = date;
    project.status = ProjectStatus.OPEN;

    this.repo.create(project);
    return await this.repo.save(project);
  }

}