// JavaScript source code
/*这是一个事件监听器，它监听浏览器的 "DOMContentLoaded" 事件，即 HTML 文档体加载、解释完毕事件 */
/*document.addEventListener("DOMContentLoaded", function () {
    function createParapraph() {
        let para = document.createElement('p');
        para.textContent = "你点击了这个按钮！";
        document.body.appendChild(para);
    }

    const buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', createParapraph);
    }
});*/

//test
// 函数：创建一个新的段落并添加至 HTML body 底部。
function createParapraph() {
    let para = document.createElement('p');
    para.textContent = "hello world";
    document.body.appendChild(para);
}

/*
  1. 取得页面上所有按钮的引用并将它们置于一个数组中。
  2. 通过一个循环为每个按钮添加一个点击事件的监听器。
  当按钮被点击时，调用 createParagraph() 函数。
*/
const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', createParapraph);
}