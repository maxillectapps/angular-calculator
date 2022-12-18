import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
input:string='';
result:string='';


pressNum(num:string){
  if(num=="."){
    if(this.input!=""){
      const lastNum=this.getLastOperand();
      console.log(lastNum.lastIndexOf("."));
      if(lastNum.lastIndexOf(".")>=0) return;
    }
  }
  if(num=="0"){
    if(this.input==""){
      return;
    }
    const prevKey=this.input[this.input.length-1];
    if(prevKey==="/" || prevKey==="*" || prevKey==="-" || prevKey==="+"){
      return;
    }
  }
  this.input=this.input+num;
  this.calcAnswer();
}

//Do not allow more than one 0 in the beginning
//Javascript will throw Octal Literals are not allowed in strict mode
getLastOperand(){
  let position:number;
  console.log(this.input);
  position=this.input.toString().lastIndexOf("+");
  if(this.input.toString().lastIndexOf("-")>position){
    position=this.input.lastIndexOf("-")
  }
  position=this.input.toString().lastIndexOf("-");
  if(this.input.toString().lastIndexOf("*")>position){
    position=this.input.lastIndexOf("*")
  }
  position=this.input.toString().lastIndexOf("*");
  if(this.input.toString().lastIndexOf("/")>position){
    position=this.input.lastIndexOf("/")
  }
  console.log('Last'+this.input.substring(position+1));
  return this.input.substring(position+1);
}

//Do not allow operator more than once
pressOperator(op:string){
const lastKey=this.input[this.input.length-1];
if(lastKey==='/' || lastKey==="*" || lastKey==="-" || lastKey==="+"){
  return;
}
this.input=this.input+op;
this.calcAnswer();
}


clear(){
  if(this.input!=""){
    this.input=this.input.substring(0,this.input.length-1);
    console.log("cleared");
  }
}

allClear(){
  this.input="";
  this.result="";
}

calcAnswer(){
  let formula=this.input;
  let lastKey=formula[formula.length-1];
  if(lastKey==='.'){
    formula=formula.substring(0,formula.length-1);
  }
  lastKey=formula[formula.length-1];
  if(lastKey==="/" || lastKey==="*" || lastKey==="-" || lastKey==="+" || lastKey==="."){
  
  }
  console.log("Formula::::::::::::::::::::::"+formula);
  this.result=eval(formula);
}

getAnswer(){
  this.calcAnswer();
  this.input=this.result.toString();
  if(this.input=="0"){
    this.input="";
  }
}

}
