(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-333cf4e4"],{"66c4":function(t,s,a){"use strict";var e=a("9820"),i=a.n(e);i.a},9820:function(t,s,a){},cf2a:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("HomeNavbar"),a("section",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-7 p-0 px-lg-1"},[a("div",{staticClass:"pb-0 pb-md-7"},[a("form",{on:{submit:function(s){return s.preventDefault(),t.payOrder(s)}}},[a("div",{staticClass:"bg-primary text-primary-200 py-5 px-6"},[a("div",{staticClass:"form-row mb-5"},[t._m(0),a("div",{staticClass:"col-6 d-flex align-items-center"},[a("div",{staticClass:"process-step w-100"},[a("div",{staticClass:"step-circle material-icons completed"},[t._v("done")]),a("div",{staticClass:"step-circle material-icons",class:{completed:t.order.is_paid,active:!t.order.is_paid}},[t.order.is_paid?a("div",[t._v("done")]):t._e()]),a("div",{staticClass:"step-circle material-icons",class:{completed:t.order.is_paid}},[t.order.is_paid?a("div",[t._v("done")]):t._e()])])])]),a("table",{staticClass:"table mb-7"},[t._m(1),a("tbody",t._l(t.order.products,function(s){return a("tr",{key:s.id},[a("td",{staticClass:"align-middle"},[t._v(t._s(s.product.title))]),a("td",{staticClass:"align-middle"},[t._v(t._s(s.qty)+" "+t._s(s.product.unit))]),a("td",{staticClass:"align-middle text-right"},[t._v("\n                          NT$ "+t._s(t._f("currency")(s.final_total))+"\n                        ")])])}),0),a("tfoot",[t._m(2),a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),a("td",{staticClass:"text-right"},[t._v("NT$ "+t._s(t._f("currency")(t.order.total+60)))])])])]),a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("th",{attrs:{width:"150"}},[t._v("Email")]),a("td",[t._v(t._s(t.order.user.email))])]),a("tr",[a("th",[t._v("姓名")]),a("td",[t._v(t._s(t.order.user.name))])]),a("tr",[a("th",[t._v("收件人電話")]),a("td",[t._v(t._s(t.order.user.tel))])]),a("tr",[a("th",[t._v("收件人地址")]),a("td",[t._v(t._s(t.order.user.address))])]),a("tr",[a("th",[t._v("付款狀態")]),a("td",[t.order.is_paid?a("span",{staticClass:"text-success"},[t._v("付款完成")]):a("span",[t._v("尚未付款")])])])])])]),!1===t.order.is_paid?a("button",{staticClass:"btn btn-minor btn-block btn-xl text-primary\n              font-weight-bold py-3"},[t._v("確認付款去")]):a("router-link",{staticClass:"btn btn-minor btn-block btn-xl text-primary\n              font-weight-bold py-3",attrs:{to:"/"}},[t._v("繼續購物")])],1)])])])]),a("Footer")],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-6"},[a("h1",{staticClass:"m-0"},[t._v("訂單資訊")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("th",[t._v("品名")]),a("th",[t._v("數量")]),a("th",{staticClass:"text-right"},[t._v("單價")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("運費")]),a("td",{staticClass:"text-right"},[t._v("NT$ 60")])])}],r=a("d2d1"),n=a("fd2d"),c={components:{HomeNavbar:r["a"],Footer:n["a"]},data:function(){return{order:{user:{}},orderId:""}},methods:{getOrder:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io/","api/").concat("di","/order/").concat(t.orderId);t.$store.dispatch("updateLoading",!0),this.$http.get(s).then(function(s){t.order=s.data.order,t.$store.dispatch("updateLoading",!1)})},payOrder:function(){var t=this,s=this,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("di","/pay/").concat(s.orderId);s.$store.dispatch("updateLoading",!0),this.$http.post(a).then(function(a){a.data.success&&t.getOrder(),s.$store.dispatch("updateLoading",!1)})}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()}},l=c,o=a("2877"),d=Object(o["a"])(l,e,i,!1,null,null,null);d.options.__file="Order.vue";s["default"]=d.exports},d2d1:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("nav",{staticClass:"navbar navbar-expand-md navbar-light bg-white"},[a("div",{staticClass:"container"},[t._m(0),a("router-link",{staticClass:"navbar-brand",attrs:{to:"/home"}},[a("img",{staticClass:"d-none d-md-inline-block",attrs:{src:"static/images/logo-all-dark.svg",width:"220",height:"40",alt:""}}),a("img",{staticClass:"d-inline-block d-md-none",attrs:{src:"static/images/logotype-sm-dark.svg",width:"114",height:"18",alt:""}})]),a("router-link",{staticClass:"nav-link d-flex align-items-center order-md-1 btn-cart",attrs:{to:"/cart"}},[a("i",{staticClass:"material-icons"},[t._v("shopping_cart")]),t.cart.carts?a("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(t.cart.carts.length))]):t._e()]),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link font-weight-bold",attrs:{to:"/home","active-class":"active"}},[t._v("首頁")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link font-weight-bold",attrs:{to:"/shopping","active-class":"active"}},[t._v("甜點")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link font-weight-bold",attrs:{to:"/login","active-class":"active"}},[t._v("登入")])],1)])])],1)])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{staticClass:"navbar-toggler d-md-none d-flex align-items-center",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("i",{staticClass:"material-icons"},[t._v("menu")])])}],r=a("cebc"),n=(a("cadf"),a("551c"),a("097d"),a("2f62")),c={methods:{getCart:function(){this.$store.dispatch("getCart")},removeCartItem:function(t){this.$store.dispatch("removeCartItem",t)}},computed:Object(r["a"])({},Object(n["b"])(["isLoading","cart"])),created:function(){this.getCart()}},l=c,o=(a("66c4"),a("2877")),d=Object(o["a"])(l,e,i,!1,null,"53556b18",null);d.options.__file="HomeNavbar.vue";s["a"]=d.exports},fd2d:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("section",{staticClass:"bg-primary py-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center px-5 px-md-0"},[a("div",{staticClass:"col-md-5 d-flex align-items-center\n        justify-content-md-start justify-content-center mb-md-0 mb-4"},[a("img",{attrs:{src:"static/images/logo-light.svg",width:"40",height:"40",alt:""}}),a("span",{staticClass:"h4 text-white mx-4 mb-0"},[t._v("訂閱你我的甜蜜郵件")])]),a("div",{staticClass:"col-md-5"},[a("div",{staticClass:"form-square form-square-withicon d-flex\n          justify-content-between text-primary"},[a("label",{staticClass:"material-icons form-square-icon-left",attrs:{for:"subscription"}},[t._v("email")]),a("input",{staticClass:"form-input w-100",attrs:{type:"email",id:"subscription"}}),a("button",{staticClass:"btn btn-minor btn-lg d-flex align-items-center"},[a("i",{staticClass:"material-icons text-primary"},[t._v("arrow_forward")])])])])])])]),a("footer",{staticClass:"bg-primary-light py-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center px-5 px-md-0"},[a("div",{staticClass:"col-md-5 d-flex flex-column justify-content-between"},[a("div",{staticClass:"pt-2"},[a("img",{attrs:{src:"static/images/logotype-sm-dark.svg",height:"27",alt:""}})]),a("ul",{staticClass:"list-unstyled mt-6"},[a("li",[t._v("07-1234-5678")]),a("li",[a("a",{attrs:{href:"mailto:sweetaste@email.com"}},[t._v("sweetaste@email.com")])]),a("li",[t._v("800 高雄市新興區幸福路 520 號")])])]),a("div",{staticClass:"col-md-5 text-right d-none d-md-block"},[a("img",{attrs:{src:"static/images/sm-今天是個吃甜點的好日子.svg",width:"60",alt:""}})])]),a("div",{staticClass:"row justify-content-center mt-5 px-5 px-md-0"},[a("div",{staticClass:"col-md-5"},[a("img",{attrs:{src:"static/images/ic-line@.svg",height:"32",width:"32",alt:""}}),a("img",{attrs:{src:"static/images/ic-facebook.svg",height:"32",width:"32",alt:""}})]),a("div",{staticClass:"col-md-5 d-flex justify-content-start justify-content-md-end\n        align-items-end mt-md-0 mt-4"},[a("span",{staticClass:"text-nowrap copyright"},[t._v("© 2018 Sweetaste* All Rights Reserved")])])])])])])}],r=a("2877"),n={},c=Object(r["a"])(n,e,i,!1,null,null,null);c.options.__file="Footer.vue";s["a"]=c.exports}}]);
//# sourceMappingURL=chunk-333cf4e4.837d1fa1.js.map