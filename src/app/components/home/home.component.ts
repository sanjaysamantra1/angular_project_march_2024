import { Component } from '@angular/core';
import { FolderExplorerComponent } from '../folder-explorer/folder-explorer.component';
import * as data from './folderData.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FolderExplorerComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  folderData = (data as any).default;

 
}
