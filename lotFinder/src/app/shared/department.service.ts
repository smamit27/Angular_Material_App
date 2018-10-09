import { Injectable } from '@angular/core';
import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  departmentList: AngularFireList<any>;
  array = [];
  constructor(private fireBase: AngularFireDatabase) { 
    this.departmentList = this.fireBase.list('departments');
    this.departmentList.snapshotChanges().subscribe(
      list =>{
        this.array = list.map(item =>{
          return {
            $key: item.key,
            ...item.payload.val()
          }
        })
    });
  }

  getDepartmentName($key) {
    debugger;
    console.log(_.find(this.array,(obj)=>{ return obj.$key == $key}));
    if($key == '0' ||  (_.find(this.array,(obj)=>{ return obj.$key == $key; })) == undefined || (_.find(this.array,(obj)=>{ return obj.$key == $key; })) == ""){
      return "";
    }
    else {
      return _.find(this.array,(obj)=>{ return obj.$key == $key; })['name'];
    }
  }
}
