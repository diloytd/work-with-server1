let obj = {};
document.querySelector(".btn").addEventListener("click", function () {
  let title = document.querySelector(".title");
  let text = document.querySelector(".text");
  obj.titleValue = title.value;
  obj.textValue = text.value;
  let result = document.createElement("div");
  result.classList.add("result");
  document.body.appendChild(result);
  result.innerHTML = `${obj.titleValue}`;
  let resultPost = document.createElement("p");
  resultPost.classList.add("resultPost");
  document.body.appendChild(resultPost);
  resultPost.innerHTML = `${obj.textValue}`;

  title.value = "";
  text.value = "";
});

function send() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

document.querySelector(".btn").addEventListener("click", send);
