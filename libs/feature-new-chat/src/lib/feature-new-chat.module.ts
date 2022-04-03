import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewChatComponent } from './new-chat/new-chat.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    NewChatComponent
  ],
})
export class FeatureNewChatModule {}
