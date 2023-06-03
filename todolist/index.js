let task = document.getElementById('task');
let add = document.getElementById('add');

let tasklist = [];

click.addEventListener('click', function () {
    if (task.value != '') {
        tasklist.push(task.value);
        add.innerHTML = "";
        for (let i = 0; i < tasklist.length; i++) {
            add.innerHTML += `<li class="task">
        <span class="text">${tasklist[i]}</span>
        <div>
            <button class="delete" id="${tasklist.indexOf(task.value)}" onclick="{remove(${i})}">x</button>
        </div>`
        }
        task.value = '';
    }
    console.log(tasklist);
});

function remove(id) {
    tasklist.splice(id, 1);
    add.innerHTML = "";
    for (let i = 0; i < tasklist.length; i++) {
        add.innerHTML += `<li class="task">
        <span class="text">${tasklist[i]}</span>
        <div>
            <button class="delete" id="deleteitem" onclick="{remove(${i})}">x</button>
        </div>`
    }
    task.value = '';
    console.log(tasklist);
}
