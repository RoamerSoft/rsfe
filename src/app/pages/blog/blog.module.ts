import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

@NgModule({
  declarations: [
    BlogComponent,
  ],
  imports: [CoreModule, CommonModule, TranslateModule, SharedModule, BlogRoutingModule],
})

export class BlogModule {
}
