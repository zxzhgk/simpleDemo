class Singleton{
    constructor(name){
        this.name=name;
        this.instance=null;
    }
    getName(){
        return this.name;
    }
}
Singleton.getInstance=function(name){
    if(!this.instance) { 
        this.instance= new Singleton(name);
    }
    return this.instance;
}
let a=Singleton.getInstance("zs")
let b=Singleton.getInstance("ls")
console.log(a===b)

var CreateDiv = (function(){ 
    var instance; 
    var CreateDiv = function( html ){ 
    if ( instance ){ 
    return instance; 
    } 
    this.html = html; 
    this.init(); 
    return instance = this; 
    }; 
    CreateDiv.prototype.init = function(){ 
    var div = document.createElement( 'div' ); 
    div.innerHTML = this.html; 
    document.body.appendChild( div ); 
    }; 
    return CreateDiv; 
   })(); 
   var a = new CreateDiv( 'sven1' ); 
   var b = new CreateDiv( 'sven2' ); 
   alert ( a === b ); // true