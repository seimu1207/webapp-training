// 参照したサイト //
// https://qiita.com/teradonburi/items/43c52d7cffc318e9b1e9#transition //
// https://qiita.com/aliceroot0678/items/2b2ea9832eaa6df69f26 //
// https://tcd-theme.com/2022/10/javascript-event-submit.html //


// 機能1：navigationペインのドラッグ＆ドロップ機能を実装するためのコード
const sortable = new Draggable.Sortable(document.querySelectorAll('.navigation'), {
  draggable: '.item'
})
sortable.on('sortable:start', (event) => console.log('sortable:start'))
sortable.on('sortable:sort', () => console.log('sortable:sort'))
sortable.on('sortable:sorted', () => console.log('sortable:sorted'))
sortable.on('sortable:stop', () => console.log('sortable:stop'))

// 機能2：入力フィールドの送信確認
function checksubmit(event){
  event.preventDefault(); // ページのリロードを防止
  if(window.confirm('送信しますか？')){ 
    // フォームの内容を取得
    const nameInput = document.getElementById('name').value;
    const emailInput = document.getElementById('email').value;
    // # 機能３：submitボタンが押された後に取得した内容を出力
    document.getElementById('output').innerHTML = `Formが送信されました！<br>名前: ${nameInput}, メールアドレス: ${emailInput}`;
    return false; // フォーム送信は不要
  }else{
    alert('キャンセルされました'); 
    return false;
  }
}
// フォームのonsubmitイベントを設定
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('form').onsubmit = checksubmit;
});



document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggle-btn');
  const body = document.body;

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('item-closed');
    
    // ボタンのテキストを切り替える
    if (body.classList.contains('item-closed')) {
      toggleBtn.textContent = '👆';
    } else {
      toggleBtn.textContent = '👉';
    }
  });
});
