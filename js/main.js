//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const poke1 = document.querySelector('#poke1').value
  const poke2 = document.querySelector('#poke2').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
  const url2 = 'https://pokeapi.co/api/v2/pokemon/'+poke2
  // let pokeStore = []
  // let pokeImg = []
  // let pokeAbility1
  // let pokeAbility2

  fetch(url)
      .then(response => response.json()) // parse response as JSON
      .then(data => {
        console.log(data) // <------ do this to check the information on the data that you are using, right click on console to create a temp variable "temp1" to get further information out 
        let pokeAbilityNameOnly = data.abilities.map(x => x.ability.name)
        console.log(pokeAbilityNameOnly)
        // pokeStore.push(data.types[0].type.name)
        // pokeImg.push(data.sprites.front_shiny)
        document.querySelector('#leftMessage').innerText = pokeAbilityNameOnly
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
        
        fetch(url2)
        .then(response => response.json()) // parse response as JSON
        .then(data => {
          console.log(data)  // <------ same thing --- do this to check the information on the data that you are using
          let pokeAbilityNameOnly1 = data.abilities.map(x => x.ability.name)
          console.log(pokeAbilityNameOnly1)
        document.querySelector('#rightMessage').innerText = pokeAbilityNameOnly1
          // pokeStore.push(data.types[0].type.name)
          // pokeImg.push(data.sprites.front_shiny)
      
          // if((pokeStore[0] === "grass" && pokeStore[1] === 'water')){
          //   document.querySelector('#pokeImg1').src = pokeImg[0]
          //   document.querySelector('#pokeImg2').src = pokeImg[1]
          //   document.querySelector('h2').innerText = " 2x > "
          // }

        })
        
      .catch(err => {
          console.log(`error ${err}`)
      });
    
}