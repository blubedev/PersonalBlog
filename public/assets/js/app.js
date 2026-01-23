const button = document.getElementById("loadBtn");
const wordsSearchBtn = document.getElementById("wordsSearchBtn");
const governmentSearchBtn = document.getElementById("governmentSearchBtn");
const list = document.getElementById("userList");
const words = document.getElementById("words");
const governmentResult = document.getElementById("governmentResult");

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

governmentSearchBtn.addEventListener("click", async () => {
    try {
        const res = await fetch("https://www.dips.mlit.go.jp/portal/file_download");
        const gov = await res.blob();

        list.innerHTML = ""; // 初期化

        gov.forEach(gov => {
            const li = document.createElement("li");
            li.textContent = gov;
            governmentResult.appendChild(li);
        });
    } catch (e) {
        alert("取得に失敗しました");
        console.error(e);
    }
});

const res = await fetch("https://www.dips.mlit.go.jp/portal/file_download");
const type = res.headers.get("content-type");

if (type.includes("application/json")) {
  const data = await res.json();
  console.log("JSON:", data);

} else if (type.includes("text/plain")) {
  const text = await res.text();
  console.log("TEXT:", text);

} else {
  const blob = await res.blob();
  console.log("FILE:", blob);
}

async () => {
    const header = new Headers();
    header.append("Content-Type", "application/json");

    const request = new Request("https://exapmle.org/post",
        {
            method: "POST",
            body: JSON.stringify({ username: "example"}),
            headers: header
        }
    )
    const response = await fetch(request);
    const status = await response.json();
    console.log(status);
}

