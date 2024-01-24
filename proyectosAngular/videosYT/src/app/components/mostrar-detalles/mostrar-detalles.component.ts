import { Component, Input } from '@angular/core';
import { Video } from 'src/app/clases/video';

@Component({
  selector: 'app-mostrar-detalles',
  templateUrl: './mostrar-detalles.component.html',
  styleUrls: ['./mostrar-detalles.component.css']
})
export class MostrarDetallesComponent {
  @Input() video: Video;

  getYouTubeEmbedUrl(url: string): string {
    const videoId = this.getYouTubeVideoId(url);
    return `https://www.youtube.com/embed/${videoId}`;
  }

  private getYouTubeVideoId(url: string): string {
    const match = url.match(/(?:\/|%3D|v=|vi=)([0-9A-Za-z_-]{11})(?:[%#?&]|$)/);
    return match ? match[1] : '';
  }

}
