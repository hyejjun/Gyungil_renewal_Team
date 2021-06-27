
window.addEventListener('DOMContentLoaded', () => {
  const td_subject = document.querySelectorAll('.td_subject');
  td_subject.forEach(v => {
    v.addEventListener('click', show_details())
  })
})

function show_details() {

}






function select_review() {
  let reviews = document.querySelectorAll('.select_rv');
  let rv = [];
  reviews.forEach(v => {
    if (v.checked) {
      rv.push(v.value);
    }
  })
  rv = rv.join(',');
  return rv;
}







async function update_mainrv() {
  if (confirm('수정된 내용을 메인페이지에 적용시키시겠습니까?')) {
    let reviewArr = select_review();
    let url = 'http://localhost:3000/admin/main/review/update'
    let options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        reviewArr,
      }),
    }
    let response = await fetch(url, options);
    if (response.ok) {
      alert('적용되었습니다.')
    } else {
      window.location.reload();
      alert('적용 실패했습니다.');
    }

  } else {
    window.location.reload();

  }
}



