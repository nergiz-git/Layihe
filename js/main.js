const btnButton = document.querySelector('.btn > button');
const add = document.querySelector('.btn');
const ul = document.querySelector('ul');
const input = document.querySelector('input')
let sor = true;
let data = []
add.addEventListener('dblclick', function e() {
    const input = document.querySelector('input');

    if (input.value.trim() !== '') {
      
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.setAttribute('class', 'list-remove');
        const p = document.createElement("p");
        const input = document.querySelector('input');
        p.textContent = input.value;
        ul.append(li);
        li.setAttribute('class', 'remove');
        li.setAttribute('id','text-content');
        new Sortable(ul,{
          animation: 360,
          chosenClass: "boxShadow",
          dragClass: "drag",
        });
        li.append(p);
        li.append(button);
        data.push(input.value);
        inputli.style.display = 'none';
        add.querySelector('span').textContent = 'New';
        btnButton.style.display = 'block';
        button.addEventListener('click', (e) => {
            li.remove();
            e.preventDefault();
            data.splice(input.value.indexOf, 1)
            alert(`${button.parentElement.querySelector('p').textContent} silindi`)
            add.querySelector('span').textContent = 'New';

        })
        add.removeEventListener('click', e);
        input.value=''
       
    }

})
btnButton.addEventListener('click', function e() {
    input.value = '';
    inputli.style.display = 'flex'
    add.querySelector('span').textContent = 'Add';
    btnButton.style.display = 'none';
})
sort.addEventListener('click', function e() {

    if (sor) {
        data.sort();
       
        sor = false;
        sort.style.backgroundImage = "url('./../img/Group\ 91.png')";
    } else {
        data.sort().reverse();
        sor = true;
        sort.style.backgroundImage = "url('./../img/Group\ 73.png')"
    }
    for(let i=0;i< data.length ;i++){
        ul.querySelectorAll('p')[i].textContent =data[i];
    }

})

