import { Routes } from '@angular/router';
import { CategorysComponent } from './categorys/categorys.component';
import { FilterComponent } from './filter/filter.component';
import { BlogsPageComponent } from './blogs-page/blogs-page.component';

export const routes: Routes = [
    {'path': 'animal_species', component:CategorysComponent},
    {'path': 'animal_filter', component:FilterComponent},
    {'path': 'blogs', component:BlogsPageComponent},


];
