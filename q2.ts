
const loadusersButton = document.getElementById('load-users') as HTMLButtonElement;

loadusersButton.addEventListener('click', () => {
        
        const responsePromise: Promise<Response> = fetch('https://jsonplaceholder.typicode.com/users');
        responsePromise
          .then((response) => response.json())
          .then((users) => {
            const userList = document.getElementById('user-list') as HTMLUListElement;
            userList.innerHTML = ''; // リストをクリア
            users.forEach((user) => {
              const listItem = document.createElement('li') as HTMLLIElement;
              listItem.className = 'card';
              listItem.innerHTML = `
            <h2>${user.name}</h2>
            <p>メール: ${user.email}</p>
            `;
              userList.appendChild(listItem);
            });
          })
          .catch((error) => {
            console.error('エラーが発生しました:', error);
          });
      });
