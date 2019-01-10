<template>
  <div id="app">
    <!-- <h1>Drafter</h1> -->
    <Heroes :heroObject="heroes" />
    <div class="draftView">
      <div class="teamBox teamBoxRad">
        <Team team="Radiant" />
      </div>
      <div class="midwayContainer">
      <!-- TODO TIMELINE GOES HERE -->
        <!-- <Timeline /> -->
        <SearchBar />
        <Timer :draftObject="draft" :roundCounter="round"/>
      </div>
      <div class="teamBox teamBoxDire">
        <Team team="Dire" />
      </div>
    </div>
  </div>
</template>

<script>
  import { draft } from './components/draft/draftDetails.js'
  import Heroes from './components/draft/Heroes.vue'
  import HeroList from './data/HeroList.json'
  import Team from './components/team/Team.vue'
  import Timer from './components/draft/Timer.vue'
  import SearchBar from './components/helper/SearchBar.vue'


  // const options = () =>  {
  //   return {
  //     method: 'GET',
  //     mode: 'no-cors',
  //     credentials: 'same-origin',
  //     headers: { 'Content-Type': 'application/json; charset=utf-8' }
  //   }
  // }
  // fetch('http://localhost:3000/', { options })
  //   .then(res => res.json())
  //   .then(body => console.log('body: ', body))
  //   .catch(error => console.log(error))
  // // const heroesFromServer = () => {
  // //   fetch('/api/heroes')
  // //     .then(response => response.json())
  // //     .then(text => console.log(text))
  // //     .catch(err => console.log('error: ', err))
  // // }
  // // heroesFromServer()

  const alphabetizeHeroes = () => {
    let heroes = HeroList.heroes

    heroes.sort((a, b) => {
      let heroA = a.localized_name.toLowerCase()
      let heroB = b.localized_name.toLowerCase()
      if (heroA < heroB) //sort string ascending
          return -1 
      if (heroA > heroB)
          return 1
      return 0
    })

    return heroes
  }

  export default {
    name: 'app',
    components: {
      Team,
      Timer,
      SearchBar,
      Heroes
    },
    data () {
      return {
        heroes: alphabetizeHeroes(),
        draft: draft,
        round: 0
      }
    },
    created() {

    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .draftView {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
  }

  .midwayContainer {
    margin: -100px 0 0 0;
  }

  .teamBox {
    /* border: 1px solid black; */
    width: 40%;
    height: 400px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* .teamBoxRad {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .teamBoxDire {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  } */

</style>
