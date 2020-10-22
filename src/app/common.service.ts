import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }
createUser(user){
  return this._http.post("http://localhost:4202/users",user);
}
getAllUSer(){
  return this._http.get("http://localhost:4202/users")
}
updateUser(user){
  return this._http.put("http://localhost:4202/users/"+user.id,user)
}
deleteUser(user){
return this._http.delete("http://localhost:4202/users/"+user.id)
}
}