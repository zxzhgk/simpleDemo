data(){
  return {
    productlist:[
      id:"",
      name:"",
      price:1,
      state:
    ],
    orderList:[
      {
        id:,
        num:1,

      }
    ],
    total:3;
  }
}
<template>
   <div>
     <productlist/ :list="productlist" @addCard="addcard">
     <orderList/ :list="orderList" @change="change">
     <div>total</div>
   </div>
</template>