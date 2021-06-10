/* 휴대폰 번호 자동 하이픈 처리 */
let autoHypenPhone = function (str) {
    str = str.replace(/[^0-9]/g, '');
    let tmp = '';
    if (str.length < 4) {
        return str;
    } else if (str.length < 7) {
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3);
        return tmp;
    } else if (str.length < 11) {
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 3);
        tmp += '-';
        tmp += str.substr(6);
        return tmp;
    } else {
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 4);
        tmp += '-';
        tmp += str.substr(7);
        return tmp;
    }

    return str;
}


let phoneNum = document.getElementById('phoneNum');

phoneNum.onkeyup = function () {
    console.log(this.value);
    this.value = autoHypenPhone(this.value);
}


/*공백 예외처리*/
const consult_submitBtn = document.querySelector('.consult_submitBtn');
const consult_input_name = document.querySelector('.consult_input_name');
const consult_input_age = document.querySelector('.consult_input_age');
const consult_input_tel = document.querySelector('.consult_input_tel');
const consult_input_text = document.querySelector('.consult_input_text');
const consult_form = document.querySelector('.consult_form')
const disagree = document.querySelector('#disagree');
console.log(disagree);

//console.log(consult_input);
consult_submitBtn.addEventListener('click', () => {
    if(disagree.checked){
        alert('개인정보 약관에 동의해주세요');
        return;
    }
    if (!consult_input_name.value) {
        alert('이름을 입력하세요')
        consult_input_name.focus();
        return;
    }
    if (!consult_input_age.value) {
        alert('나이를 입력하세요')
        consult_input_age.focus();
        return;
    }
    if (!consult_input_tel.value) {
        alert('전화번호를 입력하세요')
        consult_input_tel.focus();
        return;
    }
    if (!consult_input_text.value) {
        alert('내용을 입력하세요')
        consult_input_text.focus();
        return;
    }
    alert('상담 내용이 성공적으로 접수 되었습니다.')
    consult_form.submit()
})
