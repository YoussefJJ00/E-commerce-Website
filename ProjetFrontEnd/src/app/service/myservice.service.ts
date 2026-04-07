import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer` + ` ` + `${localStorage.getItem("token")}`
    })
  }
  constructor(private http: HttpClient) { }
  AllAdmin()
  { return this.http.get(`${environment.baseUrl}/Admin/list`) }
  deleteOneadmin(id: String)
  { return this.http.delete(`${environment.baseUrl}/Admin/delete_one/${id}`) }
  Detailsadmin(id: String)
  { return this.http.get(`${environment.baseUrl}/Admin/one/${id}`) }
  Ajoutadmin(data: any) 
  { return this.http.post(`${environment.baseUrl}/Admin/create`, data) }
  updateadmin(data:any,id:String)
  {return this.http.patch(`${environment.baseUrl}/Admin/update_with_photo/${id}`,data)}

  Ajoutcommande(data: any, idc: String) {

    return this.http.post<number>(`${environment.baseUrl}/commande/create/${idc}`, data);
  }
  AllCommande() {
    return this.http.get(`${environment.baseUrl}/commande/list`)
  }
  deleteOneorder(id: any) { return this.http.delete(`${environment.baseUrl}/commande/delete/${id}`) }
  confirmOrder(id: any) {
    return this.http.patch(`${environment.baseUrl}/commande/confirm/${id}`, null);
  }
  getUnconfirmedOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseUrl}/commande/unconfirmed`);

  }
  
  allhiscmd(id:String) { return this.http.get(`${environment.baseUrl}/commande/list`) }

  AllProduit(categoryId: string = '')
  { 
    // const url = `${environment.baseUrl}/produit/${categoryId === '' ? 'list' : `listByCat/${categoryId}`}`;
    const url = `${environment.baseUrl}/produit/list?catId=${categoryId}`;
    return this.http.get(url) }
  deleteOneproduit(id: String) {
  return this.http.delete(`${environment.baseUrl}/produit/delete/${id}`) }
  Detailsproduit(id: String) {
  return this.http.get(`${environment.baseUrl}/produit/one/${id}`) }
  Ajoutproduit(data: any, idcat: String) { 
  return this.http.post(`${environment.baseUrl}/produit/create/${idcat}`, data) }
  forderdetail() {
  return this.http.get(`${environment.baseUrl}/orderdetails/list`) }

  AjoutOdetail(data: any,orderId:String) { return this.http.post<void>(`${environment.baseUrl}/orderdetails/create/${orderId}`, data) }

  


  AllCategory() { return this.http.get(`${environment.baseUrl}/category/list`) }
  deleteOnecategory(id: String) { return this.http.delete(`${environment.baseUrl}/category/delete_one/${id}`) }
  Detailscategory(id: String) { return this.http.get(`${environment.baseUrl}/category/one/${id}`) }
  Ajoutcategory(data: any) { return this.http.post(`${environment.baseUrl}/category/create`, data) }



  AllClient() { return this.http.get(`${environment.baseUrl}/client/list`) }
  deleteOneclient(id: String) { return this.http.delete(`${environment.baseUrl}/client/delete/${id}`) }
  Detailsclient(id: String) { return this.http.get(`${environment.baseUrl}/client/one/${id}`) }
  one(id: String) { return this.http.get(`${environment.baseUrl}/user/one/${id}`) }
  Ajoutclient(data: any) { return this.http.post(`${environment.baseUrl}/client/create`, data) }

 
  


  
  updateClient(id: String, data: any) { return this.http.patch(`${environment.baseUrl}/client/updatephoto/${id}`, data) }
  updatecat(id: String, data: any) { return this.http.patch(`${environment.baseUrl}/category/update/${id}`, data) }
  updateproduit(id: String, idcat: String, data: any) { return this.http.patch(`${environment.baseUrl}/produit/update/${id}/${idcat}`, data) }

  login(cat: any) {
    return this.http.post(`${environment.baseUrl}/Auth/login`, cat)
  }
  logout(data: any) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer` + ` ` + data
      })
    }
    //console.log("****************httpheadrs**",this.httpOptions);
    return this.http.get(`${environment.baseUrl}/Auth/logout`, this.httpOptions)
  }







}
