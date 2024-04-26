document.addEventListener("DOMContentLoaded", function () {
  api();
});

let users = [];

async function api() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  users = await response.json();
  console.log(users);
  renderUser();
}

// This will initially render API users
function renderUser() {
  let parent = document.getElementById("userList");
  parent.innerHTML = "";

  users.forEach((value, index) => {
    let child = document.createElement("tr");
    child.innerHTML = `<td>${index + 1}</td>
    <td>${value.name}</td>
    <td>${value.email}</td>
    <td>
        <button class="btn btn-secondary px-4 " onclick="editUser(${
          value.id
        })">Edit</button>
        <button class="btn btn-danger px-3 ms-2" onclick="deleteUser(${
          value.id
        })">Delete</button>
    </td>`;

    parent.appendChild(child);
  });
}

async function addUser() {
  let name = document.getElementById("username").value;
  let id = document.getElementById("id").value;
  let email = document.getElementById("email").value;
  let newUser = { name, email, id };

  if (id) {
    users[id - 1] = { ...newUser };
    renderUser();
  } else {
    let api = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    let response = await api.json();
    users.push({ ...response, id: users.length + 1 });
    console.log(users);

    console.log(
      users.filter((ele) => {
        return ele.id == "11";
      })
    );
    renderUser();
  }
}

function editUser(userId) {
  let needToEdit = users.find((val) => val.id == userId);
  let name = (document.getElementById("username").value = needToEdit.name);
  let id = (document.getElementById("id").value = userId);
  let email = (document.getElementById("email").value = needToEdit.email);
}

async function deleteUser(eve) {
  users = users.filter((ele) => ele.id !== eve);
  let Delete = await fetch(
    `https://jsonplaceholder.typicode.com/users/${eve}`,
    {
      method: "DELETE",
    }
  );
  let deletedData = await Delete.json();
  renderUser();
}
