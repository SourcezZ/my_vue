exports.install = function (Vue, options) {
    Vue.prototype.text1 = function (){//全局函数1
     alert('执行成功1');
     };
     Vue.prototype.showData = function (a){//全局函数2
        alert(a);
        };
    Vue.prototype.greet = function (event) {
            // `this` 在方法里指向当前 Vue 实例
            alert('Hello ')
            // `event` 是原生 DOM 事件
            // if (event) {
            //   alert(event.target.tagName)
            // }
          }
 };
 