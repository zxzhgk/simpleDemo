const { PI } = Math;

exports.area = (r) => PI * r ** 2;

exports.circumference = (r) => 2 * PI * r;
module.exports={
	a:"11",
	b:"22"
}
console.log(__filename);
console.log(__dirname);
// 注意点
// exports 是  module.exports 的更简短的引用形式; 直接对 exports.a=... 相当于 module.exports={
// 	"a":........
// }