


document.querySelector('.btnOne').addEventListener('click', () => {
  
  let disable = document.querySelector('.btnOne')
  disable.setAttribute('disabled', 'disabled');

  let form = document.createElement('FORM');
  form.setAttribute("id", "myForm");
  document.querySelector('.left').prepend(form);

  let inputForm = document.createElement('input');
  inputForm.setAttribute('id', 'cardName')
  inputForm.setAttribute('type','text')
  inputForm.setAttribute('value', 'Card Name')
  document.querySelector('#myForm').appendChild(inputForm)

  let inputFormTwo = document.createElement('input');
  inputFormTwo.setAttribute('id', 'cardType')
  inputFormTwo.setAttribute('type','text')
  inputFormTwo.setAttribute('value', 'Type')
  document.querySelector('#myForm').appendChild(inputFormTwo)

  let inputFormThree = document.createElement('input');
  inputFormThree.setAttribute('id', 'cardMana')
  inputFormThree.setAttribute('type','text')
  inputFormThree.setAttribute('value', 'Mana')
  document.querySelector('#myForm').appendChild(inputFormThree)

  let inputFormFour = document.createElement('input');
  inputFormFour.setAttribute('id', 'cardImage')
  inputFormFour.setAttribute('type','text')
  inputFormFour.setAttribute('value', 'Image Link')
  document.querySelector('#myForm').appendChild(inputFormFour)


  let buttonSub = document.createElement('input')
  buttonSub.setAttribute('type', 'submit')
  buttonSub.innerHTML = 'Submit'
  document.querySelector('#myForm').appendChild(buttonSub)


  document.querySelector('#myForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const newCard = {
    name: e.target.cardName.value,
    type: e.target.cardType.value,
    mana: e.target.cardMana.value,
    cardImage: e.target.cardImage.value
  }
  renderCardColumnOne(newCard);
  document.querySelector('#myForm').remove();
  disable.removeAttribute('disabled');
  
})
  ;
})

document.querySelector('.btnTwo').addEventListener('click', () => {
  
  let disable = document.querySelector('.btnTwo')
  disable.setAttribute('disabled', 'disabled');
  
  let form = document.createElement('FORM');
  form.setAttribute("id", "myFormTwo");
  document.querySelector('.middle').prepend(form);

  let inputForm = document.createElement('input');
  inputForm.setAttribute('id', 'cardName')
  inputForm.setAttribute('type','text')
  inputForm.setAttribute('value', 'Card Name')
  document.querySelector('#myFormTwo').appendChild(inputForm)

  let inputFormTwo = document.createElement('input');
  inputFormTwo.setAttribute('id', 'cardType')
  inputFormTwo.setAttribute('type','text')
  inputFormTwo.setAttribute('value', 'Type')
  document.querySelector('#myFormTwo').appendChild(inputFormTwo)

  let inputFormThree = document.createElement('input');
  inputFormThree.setAttribute('id', 'cardMana')
  inputFormThree.setAttribute('type','text')
  inputFormThree.setAttribute('value', 'Mana')
  document.querySelector('#myFormTwo').appendChild(inputFormThree)

  let inputFormFour = document.createElement('input');
  inputFormFour.setAttribute('id', 'cardImage')
  inputFormFour.setAttribute('type','text')
  inputFormFour.setAttribute('value', 'Image Link')
  document.querySelector('#myFormTwo').appendChild(inputFormFour)


  let buttonSub = document.createElement('input')
  buttonSub.setAttribute('type', 'submit')
  buttonSub.innerHTML = 'Submit'
  document.querySelector('#myFormTwo').appendChild(buttonSub)
  
  document.querySelector('#myFormTwo').addEventListener('submit', (e) => {
  e.preventDefault();
  const newCard = {
    name: e.target.cardName.value,
    type: e.target.cardType.value,
    mana: e.target.cardMana.value,
    cardImage: e.target.cardImage.value
  }
  renderCardColumnTwo(newCard);
  document.querySelector('#myFormTwo').remove();
  disable.removeAttribute('disabled');
})

  ;
});

document.querySelector('.btnThree').addEventListener('click', () => {
  
  let disable = document.querySelector('.btnThree')
  disable.setAttribute('disabled', 'disabled');

  let form = document.createElement('FORM');
  form.setAttribute("id", "myFormThree");
  document.querySelector('.right').prepend(form);

  let inputForm = document.createElement('input');
  inputForm.setAttribute('id', 'cardName')
  inputForm.setAttribute('type','text')
  inputForm.setAttribute('value', 'Card Name')
  document.querySelector('#myFormThree').appendChild(inputForm)

  let inputFormTwo = document.createElement('input');
  inputFormTwo.setAttribute('id', 'cardType')
  inputFormTwo.setAttribute('type','text')
  inputFormTwo.setAttribute('value', 'Type')
  document.querySelector('#myFormThree').appendChild(inputFormTwo)

  let inputFormThree = document.createElement('input');
  inputFormThree.setAttribute('id', 'cardMana')
  inputFormThree.setAttribute('type','text')
  inputFormThree.setAttribute('value', 'Mana')
  document.querySelector('#myFormThree').appendChild(inputFormThree)

  let inputFormFour = document.createElement('input');
  inputFormFour.setAttribute('id', 'cardImage')
  inputFormFour.setAttribute('type','text')
  inputFormFour.setAttribute('value', 'Image Link')
  document.querySelector('#myFormThree').appendChild(inputFormFour)


  let buttonSub = document.createElement('input')
  buttonSub.setAttribute('type', 'submit')
  buttonSub.innerHTML = 'Submit'
  document.querySelector('#myFormThree').appendChild(buttonSub)


  document.querySelector('#myFormThree').addEventListener('submit', (e) => {
  e.preventDefault();
  const newCard = {
    name: e.target.cardName.value,
    type: e.target.cardType.value,
    mana: e.target.cardMana.value,
    cardImage: e.target.cardImage.value
  }
  renderCardColumnThree(newCard);
  document.querySelector('#myFormThree').remove();
  disable.removeAttribute('disabled')
})
  
  ;
})







function renderCardColumnOne(cards) {
  const li = document.createElement('li')
  const h4Name = document.createElement('h4')
  const h4Type = document.createElement('h4')
  const h4Mana = document.createElement('h4')
  const cardImage = document.createElement('img')
  const btnOne = document.createElement('button')
  const removeBtnOne = document.createElement('button')
  const editOne = document.createElement('button')
  

  h4Name.textContent = `Name:  ${cards.name}`
  h4Type.textContent = `Type: ${cards.type}`
  h4Mana.textContent = `Mana Cost: ${cards.mana}`
  //btnOne.textContent = "Add new card"
  //btnOne.className = 'btnOne'
  //editOne.textContent = 'Edit card'
  //editOne.className = 'editOne'
  removeBtnOne.textContent = 'Remove all cards'
  removeBtnOne.className = 'removeBtnOne'
  cardImage.src = cards.cardImage
  cardImage.className = 'yo'

  
  
  li.append(h4Name, h4Type, h4Mana, cardImage, removeBtnOne)
  document.querySelector('.left').appendChild(li)

  document.querySelector('.removeBtnOne').addEventListener('click', () => {li.remove()})

  }

function renderCardColumnTwo(cards) {
    const li = document.createElement('li')
    const h4Name = document.createElement('h4')
    const h4Type = document.createElement('h4')
    const h4Mana = document.createElement('h4')
    const cardImage = document.createElement('img')
    const removeBtnTwo = document.createElement('button')
  
    h4Name.textContent = `Name:  ${cards.name}`
    h4Type.textContent = `Type: ${cards.type}`
    h4Mana.textContent = `Mana Cost: ${cards.mana}`
    removeBtnTwo.textContent = 'Remove all cards'
    removeBtnTwo.className = 'removeBtnTwo'
    cardImage.src = cards.cardImage
    cardImage.className = 'yoOne'
  
    li.append(h4Name, h4Type, h4Mana, cardImage, removeBtnTwo)
    document.querySelector('.middle').appendChild(li)

    document.querySelector('.removeBtnTwo').addEventListener('click', ()=>{li.remove()})
  }

  function renderCardColumnThree(cards) {
    const li = document.createElement('li')
    const h4Name = document.createElement('h4')
    const h4Type = document.createElement('h4')
    const h4Mana = document.createElement('h4')
    const cardImage = document.createElement('img')
    const removeBtnThree = document.createElement('button')
  
    h4Name.textContent = `Name:  ${cards.name}`
    h4Type.textContent = `Type: ${cards.type}`
    h4Mana.textContent = `Mana Cost: ${cards.mana}`
    removeBtnThree.className = 'removeBtnThree'
    removeBtnThree.textContent = 'Remove all cards'
    cardImage.src = cards.cardImage
    cardImage.className = 'yoTwo'
    
  
    li.append(h4Name, h4Type, h4Mana, cardImage, removeBtnThree)
    document.querySelector('.right').appendChild(li)

    document.querySelector('.removeBtnThree').addEventListener('click', ()=>{li.remove()})
  
  }


function renderColumns () {
    magicCards.playingCards.forEach(renderCardColumnOne)
    cheeseMan.stats.forEach(renderCardColumnTwo)
    nicolBolas.stats.forEach(renderCardColumnThree)

}


renderColumns();

