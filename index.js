



function renderCardColumnOne(cards) {
  const li = document.createElement('li')
  const h4Name = document.createElement('h4')
  const h4Type = document.createElement('h4')
  const h4Mana = document.createElement('h4')
  const cardImage = document.createElement('img')

  h4Name.textContent = `Name:  ${cards.name}`
  h4Type.textContent = `Type: ${cards.type}`
  h4Mana.textContent = `Mana Cost: ${cards.mana}`
  cardImage.src = cards.cardImage
  cardImage.className = 'yo'

  li.append(h4Name, h4Type, h4Mana, cardImage)
  document.querySelector('.left').appendChild(li)

  let formCreation = document.querySelector('.yo').addEventListener('click', (e) => {
      
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
  
    h4Name.textContent = `Name:  ${cards.name}`
    h4Type.textContent = `Type: ${cards.type}`
    h4Mana.textContent = `Mana Cost: ${cards.mana}`
    cardImage.src = cards.cardImage
    cardImage.className = 'yo'
  
    li.append(h4Name, h4Type, h4Mana, cardImage)
    document.querySelector('.middle').appendChild(li)
  
  }

  function renderCardColumnThree(cards) {
    const li = document.createElement('li')
    const h4Name = document.createElement('h4')
    const h4Type = document.createElement('h4')
    const h4Mana = document.createElement('h4')
    const cardImage = document.createElement('img')
  
    h4Name.textContent = `Name:  ${cards.name}`
    h4Type.textContent = `Type: ${cards.type}`
    h4Mana.textContent = `Mana Cost: ${cards.mana}`
    cardImage.src = cards.cardImage
    cardImage.className = 'yo'
  
    li.append(h4Name, h4Type, h4Mana, cardImage)
    document.querySelector('.right').appendChild(li)
  
  }


function renderColumns () {
    magicCards.playingCards.forEach(renderCardColumnOne)
    cheeseMan.stats.forEach(renderCardColumnTwo)
    nicolBolas.stats.forEach(renderCardColumnThree)
}


renderColumns();

