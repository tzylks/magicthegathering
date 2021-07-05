function renderCardColumnOne(cards) {
  const li = document.createElement('li')
  const h4Name = document.createElement('h4')
  const h4Type = document.createElement('h4')
  const h4Mana = document.createElement('h4')
  const cardImage = document.createElement('img')
  const btnOne = document.createElement('button')
  //const removeBtnOne = document.createElement('button')

  h4Name.textContent = `Name:  ${cards.name}`
  h4Type.textContent = `Type: ${cards.type}`
  h4Mana.textContent = `Mana Cost: ${cards.mana}`
  btnOne.textContent = "Add new card"
  btnOne.className = 'btnOne'
  //removeBtnOne.textContent = 'Remove card'
  //removeBtnOne.className = 'removeBtnOne'
  cardImage.src = cards.cardImage
  cardImage.className = 'yo'

  li.append(h4Name, h4Type, h4Mana, cardImage, btnOne)
  document.querySelector('.left').appendChild(li)

  //document.querySelector('.removeBtnOne').addEventListener('click', () => { 
    //h4Name.remove()
    //h4Type.remove()
    //h4Mana.remove()
    //cardImage.remove()
  //})

      document.querySelector('.btnOne').addEventListener('click', (e) => {
      
      let form = document.createElement('FORM');
      form.setAttribute("id", "myForm");
      document.querySelector('.left').appendChild(form);

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
    
    
      let buttonSub = document.createElement('button')
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
 })
      
    })

}



function renderCardColumnTwo(cards) {
    const li = document.createElement('li')
    const h4Name = document.createElement('h4')
    const h4Type = document.createElement('h4')
    const h4Mana = document.createElement('h4')
    const cardImage = document.createElement('img')
    const btnTwo = document.createElement('button')
  
    h4Name.textContent = `Name:  ${cards.name}`
    h4Type.textContent = `Type: ${cards.type}`
    h4Mana.textContent = `Mana Cost: ${cards.mana}`
    btnTwo.textContent = 'Add new card'
    btnTwo.className = 'btnTwo'
    cardImage.src = cards.cardImage
    cardImage.className = 'yoOne'
  
    li.append(h4Name, h4Type, h4Mana, cardImage, btnTwo)
    document.querySelector('.middle').appendChild(li)

    let formCreation = document.querySelector('.btnTwo').addEventListener('click', (e) => {
      
      let form = document.createElement('FORM');
      form.setAttribute("id", "myFormMiddle");
      document.querySelector('.middle').appendChild(form);

      let inputForm = document.createElement('input');
      inputForm.setAttribute('id', 'cardName')
      inputForm.setAttribute('type','text')
      inputForm.setAttribute('value', 'Card Name')
      document.querySelector('#myFormMiddle').appendChild(inputForm)

      let inputFormTwo = document.createElement('input');
      inputFormTwo.setAttribute('id', 'cardType')
      inputFormTwo.setAttribute('type','text')
      inputFormTwo.setAttribute('value', 'Type')
      document.querySelector('#myFormMiddle').appendChild(inputFormTwo)

      let inputFormThree = document.createElement('input');
      inputFormThree.setAttribute('id', 'cardMana')
      inputFormThree.setAttribute('type','text')
      inputFormThree.setAttribute('value', 'Mana')
      document.querySelector('#myFormMiddle').appendChild(inputFormThree)

      let inputFormFour = document.createElement('input');
      inputFormFour.setAttribute('id', 'cardImage')
      inputFormFour.setAttribute('type','text')
      inputFormFour.setAttribute('value', 'Image Link')
      document.querySelector('#myFormMiddle').appendChild(inputFormFour)
    
    
      let buttonSub = document.createElement('button')
      buttonSub.innerHTML = 'Submit'
      document.querySelector('#myFormMiddle').appendChild(buttonSub)


      document.querySelector('#myFormMiddle').addEventListener('submit', (e) => {
      e.preventDefault();
      const newCard = {
        name: e.target.cardName.value,
        type: e.target.cardType.value,
        mana: e.target.cardMana.value,
        cardImage: e.target.cardImage.value
      }
      renderCardColumnTwo(newCard);
 })
      
    })

  
  }

  function renderCardColumnThree(cards) {
    const li = document.createElement('li')
    const h4Name = document.createElement('h4')
    const h4Type = document.createElement('h4')
    const h4Mana = document.createElement('h4')
    const cardImage = document.createElement('img')
    const btnThree = document.createElement('button')
  
    h4Name.textContent = `Name:  ${cards.name}`
    h4Type.textContent = `Type: ${cards.type}`
    h4Mana.textContent = `Mana Cost: ${cards.mana}`
    btnThree.className = 'btnThree'
    btnThree.textContent = 'Add new card'
    cardImage.src = cards.cardImage
    cardImage.className = 'yoTwo'
    
  
    li.append(h4Name, h4Type, h4Mana, cardImage, btnThree)
    document.querySelector('.right').appendChild(li)

    let formCreation = document.querySelector('.btnThree').addEventListener('click', (e) => {
      
      let form = document.createElement('FORM');
      form.setAttribute("id", "myFormRight");
      document.querySelector('.right').appendChild(form);

      let inputForm = document.createElement('input');
      inputForm.setAttribute('id', 'cardName')
      inputForm.setAttribute('type','text')
      inputForm.setAttribute('value', 'Card Name')
      document.querySelector('#myFormRight').appendChild(inputForm)

      let inputFormTwo = document.createElement('input');
      inputFormTwo.setAttribute('id', 'cardType')
      inputFormTwo.setAttribute('type','text')
      inputFormTwo.setAttribute('value', 'Type')
      document.querySelector('#myFormRight').appendChild(inputFormTwo)

      let inputFormThree = document.createElement('input');
      inputFormThree.setAttribute('id', 'cardMana')
      inputFormThree.setAttribute('type','text')
      inputFormThree.setAttribute('value', 'Mana')
      document.querySelector('#myFormRight').appendChild(inputFormThree)

      let inputFormFour = document.createElement('input');
      inputFormFour.setAttribute('id', 'cardImage')
      inputFormFour.setAttribute('type','text')
      inputFormFour.setAttribute('value', 'Image Link')
      document.querySelector('#myFormRight').appendChild(inputFormFour)
    
    
      let buttonSub = document.createElement('button')
      buttonSub.innerHTML = 'Submit'
      document.querySelector('#myFormRight').appendChild(buttonSub)


      document.querySelector('#myFormRight').addEventListener('submit', (e) => {
      e.preventDefault();
      const newCard = {
        name: e.target.cardName.value,
        type: e.target.cardType.value,
        mana: e.target.cardMana.value,
        cardImage: e.target.cardImage.value
      }
      renderCardColumnThree(newCard);
 })
      
    })
  
  }


function renderColumns () {
    magicCards.playingCards.forEach(renderCardColumnOne)
    cheeseMan.stats.forEach(renderCardColumnTwo)
    nicolBolas.stats.forEach(renderCardColumnThree)
}


renderColumns();

