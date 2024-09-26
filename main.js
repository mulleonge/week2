// DOMContentLoaded 이벤트로 HTML 문서가 완전히 로드된 후 스크립트를 실행합니다.
document.addEventListener('DOMContentLoaded', () => {
    // "create" 버튼 클릭 시 onClickCreateButton 함수가 실행됩니다.
    document.querySelector('.button').addEventListener('click', onClickCreateButton);
});

function onClickCreateButton() {
    // <input> 요소를 선택하고 입력된 제목 값을 가져옵니다.
    const titleInput = document.querySelector('#input-title');
    const title = titleInput.value.trim();

    // 제목이 빈 문자열이라면 알림을 띄우고 함수를 종료합니다.
    if (title === '') {
        alert('enter a title!!');
        return;
    }

    // 새로운 할 일 항목을 생성합니다.
    const item = document.createElement('div');
    item.className = 'item';

    // 제목 요소를 생성하고 텍스트를 설정합니다.
    const itemTitle = document.createElement('div');
    itemTitle.className = 'title';
    itemTitle.textContent = title;

    // 제거 버튼을 생성합니다.
    const removeButton = document.createElement('div');
    removeButton.className = 'remove';
    removeButton.textContent = 'bye-bye';

    // 제거 버튼 클릭 시 항목을 삭제하는 이벤트를 추가합니다.
    removeButton.addEventListener('click', () => {
        item.remove();
    });

    // 마우스를 올리면 배경색이 변경되는 이벤트를 추가합니다.
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = '#E0E0E1';
    });

    // 마우스를 내리면 배경색을 원래대로 되돌립니다.
    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = '';
    });

    // 생성된 제목과 제거 버튼을 항목에 추가합니다.
    item.appendChild(itemTitle);
    item.appendChild(removeButton);

    // 항목을 할 일 목록에 추가합니다.
    document.querySelector('.todo-list').appendChild(item);

    // 입력 필드를 비웁니다.
    titleInput.value = '';
}
