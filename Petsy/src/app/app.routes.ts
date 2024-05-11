import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CategorysComponent } from './categorys/categorys.component';
import { FilterComponent } from './filter/filter.component';
import { BlogsPageComponent } from './blogs-page/blogs-page.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
    {'path': '', component:HomePageComponent},
    {'path': 'animal_species', component:CategorysComponent},
    {'path': 'animal_filter', component:FilterComponent},
    {'path': 'blogs', component:BlogsPageComponent},
    {'path': 'blog', component:BlogComponent},
];
