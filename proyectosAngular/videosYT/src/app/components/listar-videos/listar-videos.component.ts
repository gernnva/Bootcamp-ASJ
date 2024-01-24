import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/clases/video';

@Component({
  selector: 'app-listar-videos',
  templateUrl: './listar-videos.component.html',
  styleUrls: ['./listar-videos.component.css'],
})
export class ListarVideosComponent implements OnInit {
  videos: Video[];

  ngOnInit(): void {
    this.videos = [
      {
        id: 1,
        url: 'https://www.youtube.com/watch?v=ebXbLfLACGM',
        categoria: 'House',
        titulo: 'Calvin Harris - Summer (Official Video)',
        descripcion: 'Temardo',
        cant_vistas: 2,
        cant_meGusta: 0,
      },
      {
        id:2,
        url: 'https://www.youtube.com/watch?v=QtXby3twMmI',
        categoria: 'Pop',
        titulo: 'Coldplay - Adventure Of A Lifetime (Official Video)',
        descripcion: 'Tranqui',
        cant_vistas: 5,
        cant_meGusta: 2,
      },
      {
        id:5,
        url: 'https://www.youtube.com/watch?v=QtXby3twMmI',
        categoria: 'Pop',
        titulo: 'Coldplay - Adventure Of A Lifetime (Official Video)',
        descripcion: 'Tranqui',
        cant_vistas: 5,
        cant_meGusta: 2,
      },
      {
        id:4,
        url: 'https://www.youtube.com/watch?v=QtXby3twMmI',
        categoria: 'Pop',
        titulo: 'Coldplay - Adventure Of A Lifetime (Official Video)',
        descripcion: 'Tranqui',
        cant_vistas: 5,
        cant_meGusta: 2,
      },
    ];

    
  }

  getYouTubeThumbnail(url: string): string {
    const videoId = url.split('v=')[1];
    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  }

  
}
