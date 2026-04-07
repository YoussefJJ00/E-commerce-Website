import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { ProduitComponent } from './produit/produit.component';
import { CategoryComponent } from './category/category.component';

import { AddproduitComponent } from './addproduit/addproduit.component';
import { addcategoryComponent } from './addcategory/addcategory.component';
import { DetailadminComponent } from './detailadmin/detailadmin.component';
import { DetailclientComponent } from './detailclient/detailclient.component';
import { DetailproduitComponent } from './detailproduit/detailproduit.component';
import { DetailcategoryComponent } from './detailcategory/detailcategory.component';
import { UpdateadminComponent } from './updateadmin/updateadmin.component';
import { UpdateclientComponent } from './updateclient/updateclient.component';
import { UpdateproduitComponent } from './updateproduit/updateproduit.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { HomeComponent } from './home/home.component';
import { CreateadminComponent } from './createadmin/createadmin.component';
import { addclientComponent } from './addclient/addclient.component';
import { LoginComponent } from './login/login.component';
import { homeclientComponent } from './homeclient/homeclient.component';
import { CommandeComponent } from './commande/commande.component';

import { PanierComponent } from './panier/panier.component';
import { SignupComponent } from './signup/signup.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { ClientGuard } from './guard/auth..guard';
import { AdminGuard } from './guardsadmin/auth..guard';
import { HistocmdComponent } from './histocmd/histocmd.component';
import { HistocmdClientComponent } from './hist_cmd_client/hist_cmd_client.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'home', canActivate: [AdminGuard], component: HomeComponent, pathMatch: 'full' },
  { path: 'homeclient', canActivate: [ClientGuard], component: homeclientComponent, pathMatch: 'full' },
  { path: 'admin', canActivate: [AdminGuard], component: AdminComponent, pathMatch: 'full' },
  { path: 'createadmin', canActivate: [AdminGuard], component: CreateadminComponent, pathMatch: 'full' },
  { path: 'detailadmin/:id', canActivate: [AdminGuard], component: DetailadminComponent, pathMatch: 'full' },
  { path: 'updateadmin/:id', canActivate: [AdminGuard], component: UpdateadminComponent, pathMatch: 'full' },
  { path: 'client', canActivate: [AdminGuard], component: ClientComponent, pathMatch: 'full' },
  { path: 'addclient', canActivate: [AdminGuard], component: addclientComponent, pathMatch: 'full' },
  { path: 'detailclient/:id', component: DetailclientComponent, pathMatch: 'full' },
  { path: 'updateclient/:id', component: UpdateclientComponent, pathMatch: 'full' },
  { path: 'produit', canActivate: [AdminGuard], component: ProduitComponent, pathMatch: 'full' },
  { path: 'addproduit', canActivate: [AdminGuard], component: AddproduitComponent, pathMatch: 'full' },
  { path: 'detailproduit/:id', component: DetailproduitComponent, pathMatch: 'full' },
  { path: 'updateproduit/:id', canActivate: [AdminGuard], component: UpdateproduitComponent, pathMatch: 'full' },
  { path: 'category', canActivate: [AdminGuard], component: CategoryComponent, pathMatch: 'full' },
  { path: 'addcategory', canActivate: [AdminGuard], component: addcategoryComponent, pathMatch: 'full' },
  { path: 'detailcategory/:id', canActivate: [AdminGuard], component: DetailcategoryComponent, pathMatch: 'full' },
  { path: 'updatecategory/:id', canActivate: [AdminGuard], component: UpdatecategoryComponent, pathMatch: 'full' },
  { path: 'commande/:id', component: CommandeComponent, pathMatch: 'full' },
  { path: 'hiscmd', component: HistocmdComponent, pathMatch: 'full' },
  { path: 'hiscmd_client', component: HistocmdClientComponent, pathMatch: 'full' },
  { path: 'panier', canActivate: [ClientGuard], component: PanierComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' } // Handles undefined routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
