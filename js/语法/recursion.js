// recursion
let company = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 600
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
    }],
  
    internals: [{
        name: 'Jack',
        salary: 1300
    }]
    }
};

function getSalaryAll(obj){
    if(Array.isArray(obj)){
        let all=0;
        for(let i of obj){
            all+=i.salary;
        }
        return all;
    }else{
        let num=0;
        for (let item in obj){
            num += getSalaryAll(obj[item])
        }
        return num
    }
}
console.log(getSalaryAll(company));
// 用来完成作业的函数
// function sumSalaries(department) {
//     if (Array.isArray(department)) { // 情况 (1)
//       return department.reduce((prev, current) => prev + current.salary, 0); // 求数组的和
//     } else { // 情况 (2)
//       let sum = 0;
//       for (let subdep of Object.values(department)) {
//         sum += sumSalaries(subdep); // 递归调用子部门，对结果求和
//       }
//       return sum;
//     }
//   }
//   console.log(sumSalaries(company))