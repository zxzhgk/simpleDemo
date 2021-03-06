function Folder(name){
  this.name=name;
  this.files=[];
}
Folder.prototype.add=function(file){
  this.files.push(file)
}
Folder.prototype.scan=function(){
  this.files.forEach(item=>{
    console.log(item.name)
    item.scan && item.scan();
  })
}
function File1(name){
  this.name=name;
}
File1.prototype.add=function(file){
  console.log("不能添加")
}
File1.prototype.scan=function(){
  console.log("不能扫描")
}

let folder1= new Folder("文件夹1")
let folder2= new Folder("文件夹2")
let file1=new File1("文件1")
let file2=new File1("文件2")
let file3=new File1("深层文件3")
folder2.add(file1)
folder2.add(file2)
folder2.add(folder1)
folder1.add(file3)
folder2.scan()
