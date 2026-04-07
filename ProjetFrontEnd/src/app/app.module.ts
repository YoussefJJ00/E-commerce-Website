import { CUSTOM_ELEMENTS_SCHEMA, NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CategoryComponent } from './category/category.component';
import { ClientComponent } from './client/client.component';
import { ProduitComponent } from './produit/produit.component';

import { AddproduitComponent } from './addproduit/addproduit.component';
import { addcategoryComponent } from './addcategory/addcategory.component';
import { DetailadminComponent } from './detailadmin/detailadmin.component';
import { DetailcategoryComponent } from './detailcategory/detailcategory.component';
import { DetailproduitComponent } from './detailproduit/detailproduit.component';
import { DetailclientComponent } from './detailclient/detailclient.component';
import { UpdateadminComponent } from './updateadmin/updateadmin.component';
import { UpdateclientComponent } from './updateclient/updateclient.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { UpdateproduitComponent } from './updateproduit/updateproduit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CreateadminComponent } from './createadmin/createadmin.component';
import { addclientComponent } from './addclient/addclient.component';
import { homeclientComponent } from './homeclient/homeclient.component';
import { SidebaragentComponent } from './sidebaragent/sidebaragent.component';
import { CommandeComponent } from './commande/commande.component';
import { DatePipe } from '@angular/common';
import { PanierComponent } from './panier/panier.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SignupComponent } from './signup/signup.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { HistocmdComponent } from './histocmd/histocmd.component';
import { HistocmdClientComponent } from './hist_cmd_client/hist_cmd_client.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CategoryComponent,
    ClientComponent,
    ProduitComponent,
    AddproduitComponent,
    addcategoryComponent,
    DetailadminComponent,
    DetailcategoryComponent,
    DetailproduitComponent,
    DetailclientComponent,
    UpdateadminComponent,
    UpdateclientComponent,
    UpdatecategoryComponent,
    UpdateproduitComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CreateadminComponent,
    addclientComponent,
    homeclientComponent,
    SidebaragentComponent,
    CommandeComponent,
    PanierComponent,
    SignupComponent,
    IndexpageComponent,
    HistocmdComponent,
    HistocmdClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   HttpClientModule,
   ReactiveFormsModule,
   NgxPaginationModule

  ],
  providers: [
    DatePipe
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent],



})
export class AppModule { }
