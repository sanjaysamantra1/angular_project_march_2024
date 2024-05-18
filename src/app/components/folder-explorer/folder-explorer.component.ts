import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-folder-explorer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './folder-explorer.component.html',
  styleUrl: './folder-explorer.component.css',
  inputs: ['folderObj']
})
export class FolderExplorerComponent {
  folderObj: any;
  isExpanded: boolean = false;
}
