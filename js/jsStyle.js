// JavaScript source code
/*����һ���¼���������������������� "DOMContentLoaded" �¼����� HTML �ĵ�����ء���������¼� */
/*document.addEventListener("DOMContentLoaded", function () {
    function createParapraph() {
        let para = document.createElement('p');
        para.textContent = "�����������ť��";
        document.body.appendChild(para);
    }

    const buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', createParapraph);
    }
});*/

//test
// ����������һ���µĶ��䲢����� HTML body �ײ���
function createParapraph() {
    let para = document.createElement('p');
    para.textContent = "hello world";
    document.body.appendChild(para);
}

/*
  1. ȡ��ҳ�������а�ť�����ò�����������һ�������С�
  2. ͨ��һ��ѭ��Ϊÿ����ť���һ������¼��ļ�������
  ����ť�����ʱ������ createParagraph() ������
*/
const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', createParapraph);
}