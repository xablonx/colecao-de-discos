import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../models/album';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'tbody',
  templateUrl: './album-table-item.component.html',
  styleUrls: ['./album-table-item.component.css']
})
export class AlbumTableItemComponent implements OnInit {

  @Input()
  albumList!: Album[];

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
  }

  remove(album: Album) {
    this.albumService.delete(album).subscribe({
      next: () => this.albumService.getAll().subscribe({
        next: (albums: Album[]) => this.albumList = albums,
        error: (error) => alert(error.message)
      }),
      error: (error) => alert(error.message)
    });
  }
}
