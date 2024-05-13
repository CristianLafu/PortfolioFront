import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Post } from "../core/interfaces/post.interface";



@Injectable({
    providedIn: 'root'
})
export class PostsService {

    private baseUrl = 'http://localhost:3000/api/posts';

    private httpClient = inject(HttpClient);

    getAll() {
        return firstValueFrom(
            this.httpClient.get<Post[]>(this.baseUrl)
        );
    }

}