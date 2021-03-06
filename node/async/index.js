function p(){
	return new Promise(function(resolve,reject){
		setTimeout(()=>{
			resolve("hello")
		},3000)
	})
}
async function testAsync() {
    let res= await p();
	console.log(res)
	return res;
}

async function test2(){
	let res= await testAsync();
	console.log(res);
}
test2()