import { Component, inject } from '@angular/core';
import { PostsService } from '../../services/posts.services';
import { Post } from '../../core/interfaces/post.interface';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mis-trabajos',
  standalone: true,
  imports: [],
  templateUrl: './mis-trabajos.component.html',
  styleUrl: './mis-trabajos.component.css'
})

export class MisTrabajosComponent {

  postsService = inject(PostsService);

  router = inject(Router)

  posts: Post[] = [];
  postsDone: Post[] = [];
  postsActive: Post[] = [];


  async ngOnInit() {

    this.posts = await this.postsService.getAll();

    this.postsDone = this.posts.filter(post => post.status === true);
    this.postsActive = this.posts.filter(post => post.status === false);



  }




}
