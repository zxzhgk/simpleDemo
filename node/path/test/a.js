const path = require('path');
// let aa=path.dirname('/目录1/目录2/目录3/cc');
// console.log(aa);
// let bb=path.parse('/目录1/目录2/目录3/cc');
// console.log(bb);
// let cc=path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
// console.log(cc);
console.log(".-------------",path.resolve("."));
console.log("./-------------",path.resolve("./"));
console.log("../-------------",path.resolve("../"));
console.log("../../-------------",path.resolve("../../"));
console.log("../../../-------------",path.resolve("../../../"));
console.log("/-------------",path.resolve("/"));

// console.log(path.normalize("./"));