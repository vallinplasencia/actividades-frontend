import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarErrorComponent } from './snackbar/snackbar-error/snackbar-error.component';
import { SnackbarOkComponent } from './snackbar/snackbar-ok/snackbar-ok.component';
import { AppMaterialModule } from '../app-material.module';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ErrorModeloComponent } from './error-modelo/error-modelo.component';
import { SidebarSeguridadComponent } from './sidebar/sidebar-seguridad/sidebar-seguridad.component';
import { SidebarActividadesComponent } from './sidebar/sidebar-actividades/sidebar-actividades.component';
import { SidebarMisactividadesComponent } from './sidebar/sidebar-misactividades/sidebar-misactividades.component';

@NgModule({
  declarations: [
    SnackbarErrorComponent, 
    SnackbarOkComponent, 
    PlantillaComponent, 
    PageNotFoundComponent, 
    HomeComponent, 
    ErrorModeloComponent, 
    SidebarSeguridadComponent, 
    SidebarActividadesComponent, 
    SidebarMisactividadesComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule
  ],
  exports: [
    AppMaterialModule,
    PlantillaComponent,
    RouterModule,
    ErrorModeloComponent,
  ],
  entryComponents:[
    SnackbarOkComponent,
    SnackbarErrorComponent,
  ]
})
export class TemplateModule { }
