const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonSearch = document.querySelector('.input__search');
const pokemonImage = document.querySelector('.pokemon_image');
const pokemonForm = document.querySelector('.form');
const skill = document.querySelector('.skillName');
const skill2 = document.querySelector('.skillName2');
const statusHp = document.querySelector('.statusHp');
const statusAttack = document.querySelector('.statusAttack');
const statusDefense = document.querySelector('.statusDefense');
const statusSpeed = document.querySelector('.statusSpeed');
const frontButton = document.querySelector('.frontButton');
const backButton = document.querySelector('.backButton');
const shinyButton = document.querySelector('.shinyButton');
const backShinyButton = document.querySelector('.backShinyButton');


let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if(APIResponse.ok){
        
        const data = await APIResponse.json();
        return data;
    
    }

}

const renderPokemon = async (pokemon) => {

    
    pokemonName.innerHTML = 'Carregando...'
    pokemonNumber.innerHTML = '';
    pokemonImage.src = '';
    const data =  await fetchPokemon(pokemon);

    if (data){



        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        pokemonSearch.value = '';
        searchPokemon = data.id;
        frontButton.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        backButton.src = data['sprites']['versions']['generation-v']['black-white']['animated']['back_default'];
        shinyButton.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_shiny'];
        backShinyButton.src = data['sprites']['versions']['generation-v']['black-white']['animated']['back_shiny'];

        statusHp.innerHTML = data['stats']['0']['base_stat'];
        statusAttack.innerHTML = data['stats']['1']['base_stat'];
        statusDefense.innerHTML = data['stats']['2']['base_stat'];
        statusSpeed.innerHTML = data['stats']['5']['base_stat'];



        if (data['types'][0]) {
            skill.innerHTML = data['types'][0]['type']['name'];
          
            if (data['types'][0]['type']['name'] === 'grass') {
              skill.classList.remove('elementFire', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
               'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill.classList.add('elementGrass');
            }
            if (data['types'][0]['type']['name'] === 'fire') {
              skill.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill.classList.add('elementFire');
            }
            if (data['types'][0]['type']['name'] === 'water') {
              skill.classList.remove('elementFire', 'elementGrass', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill.classList.add('elementWater');
            }
            if (data['types'][0]['type']['name'] === 'dark') {
              skill.classList.remove('elementFire', 'elementWater', 'elementGrass', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill.classList.add('elementDark');
            }
            if (data['types'][0]['type']['name'] === 'fairy') {
              skill.classList.remove('elementFire', 'elementWater', 'elementDark', 'elementGrass', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill.classList.add('elementFairy');
            }
            if (data['types'][0]['type']['name'] === 'electric') {
              skill.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementFire', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill.classList.add('elementElectric');
            }
            if (data['types'][0]['type']['name'] === 'fighting') {
              skill.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFire', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill.classList.add('elementFight');
            }
            if (data['types'][0]['type']['name'] === 'ground') {
              skill.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementFire',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill.classList.add('elementGround');
            }
            if (data['types'][0]['type']['name'] === 'ice') {
              skill.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementFire', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill.classList.add('elementIce');
            }
            if (data['types'][0]['type']['name'] === 'normal') {
              skill.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementFire', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill.classList.add('elementNormal');
            }
            if (data['types'][0]['type']['name'] === 'poison') {
              skill.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementFire', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill.classList.add('elementPoison');
            }
            if (data['types'][0]['type']['name'] === 'psychic') {
              skill.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementFire', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill.classList.add('elementPsy');
            }
            if (data['types'][0]['type']['name'] === 'rock') {
              skill.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementFire', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill.classList.add('elementRock');
            }
            if (data['types'][0]['type']['name'] === 'steel') {
              skill.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementFire', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill.classList.add('elementSteel');
            }
            if (data['types'][0]['type']['name'] === 'flying') {
              skill.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFire', 'elementBug', 'elementGhost');
              skill.classList.add('elementFlying');
            }
            if (data['types'][0]['type']['name'] === 'bug') {
              skill.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementFire', 'elementGhost');
              skill.classList.add('elementBug');
            }
            if (data['types'][0]['type']['name'] === 'ghost') {
              skill.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementFire');
              skill.classList.add('elementGhost');
            }
            if (data['types'][0]['type']['name'] === 'dragon') {
              skill.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementFire', 'elementFlying', 'elementBug', 'elementGhost');
              skill.classList.add('elementDragon');
            } 
            
          } else{
            skill2.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
            'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementFire', 'elementFlying', 'elementBug', 'elementGhost', 'elementDragon');
          }

          if (data['types'][1]) {
            skill2.innerHTML = data['types'][1]['type']['name'];

            if (data['types'][1]['type']['name'] === 'grass') {
              skill2.classList.remove('elementFire', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
               'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill2.classList.add('elementGrass');
            }
            if (data['types'][1]['type']['name'] === 'fire') {
              skill2.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill2.classList.add('elementFire');
            }
            if (data['types'][1]['type']['name'] === 'water') {
              skill2.classList.remove('elementFire', 'elementGrass', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill2.classList.add('elementWater');
            }
            if (data['types'][1]['type']['name'] === 'dark') {
              skill2.classList.remove('elementFire', 'elementWater', 'elementGrass', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill2.classList.add('elementDark');
            }
            if (data['types'][1]['type']['name'] === 'fairy') {
              skill2.classList.remove('elementFire', 'elementWater', 'elementDark', 'elementGrass', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill2.classList.add('elementFairy');
            }
            if (data['types'][1]['type']['name'] === 'electric') {
              skill.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementFire', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill2.classList.add('elementElectric');
            }
            if (data['types'][1]['type']['name'] === 'fighting') {
              skill2.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFire', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill2.classList.add('elementFight');
            }
            if (data['types'][1]['type']['name'] === 'ground') {
              skill2.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementFire',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill2.classList.add('elementGround');
            }
            if (data['types'][1]['type']['name'] === 'ice') {
              skill2.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementFire', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill2.classList.add('elementIce');
            }
            if (data['types'][1]['type']['name'] === 'normal') {
              skill2.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementFire', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill2.classList.add('elementNormal');
            }
            if (data['types'][1]['type']['name'] === 'poison') {
              skill2.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementFire', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill2.classList.add('elementPoison');
            }
            if (data['types'][1]['type']['name'] === 'psychic') {
              skill2.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementFire', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill2.classList.add('elementPsy');
            }
            if (data['types'][1]['type']['name'] === 'rock') {
              skill2.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementFire', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill2.classList.add('elementRock');
            }
            if (data['types'][1]['type']['name'] === 'steel') {
              skill2.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementFire', 'elementDragon', 'elementFlying', 'elementBug', 'elementGhost');
              skill2.classList.add('elementSteel');
            }
            if (data['types'][1]['type']['name'] === 'flying') {
              skill2.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFire', 'elementBug', 'elementGhost');
              skill2.classList.add('elementFlying');
            }
            if (data['types'][1]['type']['name'] === 'bug') {
              skill2.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementFire', 'elementGhost');
              skill2.classList.add('elementBug');
            }
            if (data['types'][1]['type']['name'] === 'ghost') {
              skill2.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementDragon', 'elementFlying', 'elementBug', 'elementFire');
              skill2.classList.add('elementGhost');
            }
            if (data['types'][1]['type']['name'] === 'dragon') {
              skill2.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
              'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementFire', 'elementFlying', 'elementBug', 'elementGhost');
              skill2.classList.add('elementDragon');
            }

          }            else{
            skill2.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
            'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementFire', 'elementFlying', 'elementBug', 'elementGhost', 'elementDragon');
          }
          
          
    }
    else{
        pokemonName.innerHTML = 'Não encontrado';
        pokemonNumber.innerHTML = '';
        pokemonImage.src = '';
        statusHp.innerHTML = '';
        statusAttack.innerHTML = '';
        statusDefense.innerHTML = '';
        statusSpeed.innerHTML = '';
        frontButton.src = '';
        backButton.src = '';
        shinyButton.src = '';
        backShinyButton.src =
        skill.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
            'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementFire', 'elementFlying', 'elementBug', 'elementGhost', 'elementDragon');
            skill2.classList.remove('elementGrass', 'elementWater', 'elementDark', 'elementFairy', 'elementElectric', 'elementFight', 'elementGround',
            'elementIce', 'elementNormal', 'elementPoison', 'elementPsy', 'elementRock', 'elementSteel', 'elementFire', 'elementFlying', 'elementBug', 'elementGhost', 'elementDragon');
        

    }


      shinyButton.addEventListener('click', (shiny) => {
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_shiny'];
        shinyButton.removeEventListener('click', (shiny));
      });
      backButton.addEventListener('click', (back) => {
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['back_default'];
        backButton.removeEventListener('click', (back));
      });
      frontButton.addEventListener('click', (front) => {
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        frontButton.removeEventListener('click', (front));
      });
      backShinyButton.addEventListener('click', (backShiny) => {
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['back_shiny'];
        backShinyButton.removeEventListener('click', (backShiny));
      });
}

pokemonForm.addEventListener('submit', (event) => {

    event.preventDefault();

    renderPokemon(pokemonSearch.value.toLowerCase());

    skill.innerHTML = '';
    skill2.innerHTML = '';

})


function nextButton(){
    searchPokemon += 1
    renderPokemon(searchPokemon);

    skill.innerHTML = '';
    skill2.innerHTML = '';

}
function prevButton(){
    if(searchPokemon>1){

        searchPokemon -= 1
        renderPokemon(searchPokemon);
    
        skill.innerHTML = '';
        skill2.innerHTML = '';
    }
    
}
renderPokemon(1);