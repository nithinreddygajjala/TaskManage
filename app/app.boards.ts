
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'about-home',
  templateUrl: `app/app.boards.html`
})
export class appboards {
  arr:any=[];
  item:any;
  boardname:any='asdasd';
  boarddes:any='basdasd';

     constructor( private router: Router) {
      this.arr=JSON.parse(localStorage.getItem("lastname3"));
      if(this.arr==null){
        this.arr=[];
      }
       //this.arr=['Board1','Board2','Board3','Board4','Board2','Board3','Board4','Board3','Board4','Board2','Board3','Board4'];
     }
     remove(x){

       var k=JSON.parse(localStorage.getItem("lastname3"));
       console.log(k);
       var index = k.map(function(e) { return e.bname; }).indexOf(x);
       console.log(index);
       k.splice(index,1);
       localStorage.setItem("lastname3", JSON.stringify(k));
location.reload();

            }
     onClick(item){
       console.log(item);
       this.item=item;
     }
     boardTitle(){


       var x=JSON.parse(localStorage.getItem("lastname3"));
       if(x==null){
         x=[];
       }
       //.log(x);
        var index = x.map(function(e) { return e.bname; }).indexOf(this.boardname);
        console.log(index);
        if(index>-1){
          alert('The Board name already used');
        }
        else{
       this.arr.push({bname:this.boardname,boarddes:this.boarddes});
        localStorage.setItem("lastname3", JSON.stringify(this.arr));
          //      console.log(JSON.parse(localStorage.getItem("lastname2")));
        }



     }
    }
