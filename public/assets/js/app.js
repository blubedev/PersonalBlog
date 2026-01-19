const button = document.getElementById("loadBtn");
const wordsSearchBtn = document.getElementById("wordsSearchBtn");
const list = document.getElementById("userList");
const words = document.getElementById("words");

button.addEventListener("click", async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();

        //リクエストとレスポンスは分けても書ける
        // const res1 = fetch("https://jsonplaceholder.typicode.com/users1");
        // const res2 = fetch("https://jsonplaceholder.typicode.com/users2");

        //res1もres2もリクエストが開始されているので、
        //同時に処理が動く
        // const a = await res1
        // const b = await res2

        list.innerHTML = ""; // 初期化

        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            list.appendChild(li);
        });
    } catch (e) {
        alert("取得に失敗しました");
        console.error(e);
    }
});

wordsSearchBtn.addEventListener("click", async () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1") //responseがjsonのため、Listと違ってforeachメソッドを持っていない。
        .then((res) => res.json())
        .then((json) => {
            const wordRes = json;
            words.innerHTML = ""; // 初期化
            const li = document.createElement("li");
            li.textContent = wordRes.title;
            words.appendChild(li);
        })
        .catch((e) => {
            alert("取得に失敗しました");
            console.error(e);
        });
});
