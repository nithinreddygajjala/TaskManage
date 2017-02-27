
import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'about-home',
  templateUrl:'app/app.dashboard.html',
   viewProviders: [DragulaService]
})
export class dashboard {
  modalpass:any;
  id: any;
 paramsSub: any;
curdate:any;
 test1(x){


   this.modalpass=x;
   if(this.arrdet==null){
     this.arrdet=['a'];
   }
  var index = this.arrdet.map(function(e) { return e.cardname; }).lastIndexOf(x);


console.log(this.arrdet[index]);
if(this.arrdet[index]==undefined){
  this.des='';
  this.curdate='';
  return;
}
else{
  this.des=this.arrdet[index].des;
  this.curdate=this.arrdet[index].date;
}

 }
 constructor(private activatedRoute: ActivatedRoute,private dragulaService: DragulaService,private router: Router) {


   dragulaService.dropModel.subscribe((value) => {
         this.onDropModel(value.slice(1));
         console.log(this.name);
         localStorage.setItem(this.id, JSON.stringify(this.name));

 });
 dragulaService.removeModel.subscribe((value) => {
     this.onRemoveModel(value.slice(1));
   });
}

private onDropModel(args) {
    let [el, target, source] = args;
    // do something else
 console.log('reached');
  }

  private onRemoveModel(args) {
    let [el, source] = args;
    // do something else
    console.log('reached');
  }
 ngOnInit() {
   this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = params['id']);
   console.log(this.id);

   var k=JSON.parse(localStorage.getItem(this.id));
   if(k==null){
    k=['a'];
   }
   else{
     this.name=JSON.parse(localStorage.getItem(this.id));
   }
 }

 ngOnDestroy() {
   this.paramsSub.unsubscribe();
 }
remove(x){
  //var k=JSON.parse(localStorage.getItem("lastname3"));
  console.log(x);
  //var index = k.map(function(e) { return e.bname; }).indexOf(x);
  //console.log(index);
  //k.splice(index,1);
  //localStorage.setItem("lastname3", JSON.stringify(k));
//location.reload();
  //console.log(x);
  var k=JSON.parse(localStorage.getItem(this.id));
  if(k==null){
  k=['a'];
  }
  console.log(k);
  var index = k.map(function(e) { return e.bname; }).indexOf(x);
  k.splice(index,1);
  localStorage.setItem(this.id, JSON.stringify(k));

location.reload();

}

 name:any=[];
 cards:any=[];
 cardname:any;



 testdata:any='sample';

 getData(asdas){

var k=JSON.parse(localStorage.getItem(this.id));
if(k==null){
  k=['a'];
}
   //console.log(k);
if(k!=null){
   var index = k.map(function(e) { return e.name; }).indexOf(this.testdata);
   //console.log(index);
   if(index>-1){
     alert('name already used');
   }
//console.log(this.testdata);
  else{
   this.name.push({name:this.testdata,arr:[],arrdet:[]});
   //console.log(this.name);
localStorage.setItem(this.id, JSON.stringify(this.name));
}

 }
 else{
   this.name.push({name:this.testdata,arr:[]});
   //console.log(this.name);
localStorage.setItem(this.id, JSON.stringify(this.name));
 }




}
cardClick(i){

var index = this.name[i].arr.indexOf(this.cardname);
if(index>-1){
  alert('name already used');
}
else{
  this.name[i].arr.push(this.cardname);

  //console.log(this.name[i].arrdet);

localStorage.setItem(this.id, JSON.stringify(this.name));
}


}

arrdet:any=[];
des:any;
date:any;
savedata(x){
console.log(this.curdate);
this.arrdet.push({cardname:x,des:this.des,date:this.curdate});
console.log(this.arrdet);
localStorage.setItem('arrdet', JSON.stringify(this.arrdet));



}
}
