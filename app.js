//initilize buttons

const technames = document.querySelector('.technames');
const businessnames = document.querySelector('.busnames');
const mixednames = document.querySelector('.mixednames');
const youtubenames = document.querySelector('.ytnames');

//initilize containers

const names = document.querySelector('.names');
const generated = document.querySelector('.generated');
const technamessecond = document.querySelector('.technamessecond');
const names1 = document.querySelector('.names1');

//intilaize names array

const Tnames = ['Technowire', 'techyType', 'bittech', 'bitload', 'sportfish tech', 'subchronic', 'coputer.io', 'techbox', 'Monobotics', 'iRobotics', 'techLabs', 'micropaltes'];

//generate random name in the array

const name = parseInt(Math.random() * Tnames.length);

//genearte template

const namestemplate = ( name => {
    return names.innerHTML = `<div class="container namescontainer shadow bg-white rounded text-center text-secondary my-3 py-3"><h5>${Tnames[name]}</h5></div>`;
           //names.innerHTML = html;
});

//technames click event handler

technames.addEventListener('click', (e) => {
    let number = 0;
    let number2 = 100;
    generated.innerHTML += `<h5>Generating Tech Names plaese wait...</h5>`;
    const timer = setInterval(() => {
        names.innerHTML = ` <div class="container namescontainer shadow bg-dark rounded text-center text-secondary my-3 py-3"><h3>...${number}%</h3></div>`;
        if (number === number2) {
            clearInterval();
            generated.innerHTML = `<h5>Generated Tech Names</h5>`;
            namestemplate(name);
            //names.innerHTML = ` <div class="container namescontainer shadow bg-white rounded text-center text-secondary my-3 py-3"><h5>${Tnames[name]}</h5></div>`;
        } else {
            number++;
        }
    }, 50);

    technames.classList.add('hide');
    technamessecond.classList.remove('hide');
});

//refresh button clikck event handler

technamessecond.addEventListener('click', (e) => {
  names.classList.add('hide');
  const name1 = parseInt(Math.random() * Tnames.length);
  const namestemplate1 = ( name1 => {
    return names1.innerHTML = `<div class="container namescontainer shadow bg-white rounded text-center text-secondary my-3 py-3"><h5>${Tnames[name1]}</h5></div>`;

});
 namestemplate1(name1);
});


