
// FormData 表单数据，使用post请求，可以处理表单数据，或者一些非文本数据：图片、文件、音频等数据

var form = document.querySelector('form');
var nameInput = document.querySelector('.username');
var pswInput = document.querySelector('.password');
function formDataAjax() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4) {
            console.log(xhr.responseText);
        }
    }

    xhr.open('POST','/api/post');

    // 可以处理普通的文本数据
    // var fd = new FormData();
    // fd.append('username','张三');
    // fd.append('age','22');
    // fd.append('gender','男')

    // 表单数据，用formData处理append拼接的方式，对input标签没有任何要求，参数字段和值在 append中设置
    // var fd = new FormData();
    // fd.append('username',nameInput.value);
    // fd.append('password',pswInput.value);

    // 把原生 form 对象当做 formData 参数，form表单包含的参数会自动添加到 formdata中
    // 要求 input标签必须添加 name 属性 这只参数名，参数值就是输入框的内容
    // 最终数据被格式化成：key=value&keyvalue
    var fd = new FormData(form);

    xhr.send(fd);
    
}