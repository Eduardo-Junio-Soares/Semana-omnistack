import React, { useState, useEffect } from 'react';
import api from './services/api'


import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'
  


// Componente: (é uma função que retorna algum conteudo HTML, ou Css, ou interface em javascript) bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação.

// Propriedade: informações que um componente PAI passa para o componente FILHO

// Estado: Informaçãoes mantidas pelo componente (Lembrar: imutabilidade)


function App() {
  const [github_username, setGithubUsername] = useState('')
  const [techs, setTechs] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude} = position.coords

        setLatitude(latitude)
        setLongitude(longitude)

      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handAddDev(e) {
    e.preventDefault()

    const response = await api.post('./devs', {
      github_username,
      techs,
      latitude,
      longitude,
    })

      console.log(response.data)
  }

  return (
    <div id="App">
      <aside>

        <strong>Cadastrar</strong>
        <form>

          <div className = 'input-block'>
            <label htmlFor='github_username'>Usuário do Github</label>
            <input 
            name = 'github_username' 
            id = 'github_username' 
            required
            value = {github_username}
            onChange = {e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className = 'input-block'>
            <label htmlFor='techs'>Tecnologias</label>
            <input 
            name = 'techs' 
            id = 'techs' 
            required
            value = {techs}
            onChange = {e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className = 'input-block'>
              <label htmlFor='latitude'>Latitude</label>
              <input  
              type = "number" 
              name = 'latitude' 
              id = 'latitude' 
              required value = {latitude}
              onChange = {e => setLatitude(e.target.value)}
              />
              
            </div>
            <div className = 'input-block'>
              <label htmlFor='longitude'>Longitude</label>
              <input 
              type = "number"
              name = 'longitude' 
              id = 'longitude' 
              required 
              value = {longitude}
              onChange = {e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>

        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/2254731?s=400&v=4" alt="Diego Fernandes"/>
              <div className="user-info">
                  <strong>Diego Fernandes</strong>
                  <span>ReactJS, react Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/diego3g">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/2254731?s=400&v=4" alt="Diego Fernandes"/>
              <div className="user-info">
                  <strong>Diego Fernandes</strong>
                  <span>ReactJS, react Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/diego3g">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/2254731?s=400&v=4" alt="Diego Fernandes"/>
              <div className="user-info">
                  <strong>Diego Fernandes</strong>
                  <span>ReactJS, react Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/diego3g">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/2254731?s=400&v=4" alt="Diego Fernandes"/>
              <div className="user-info">
                  <strong>Diego Fernandes</strong>
                  <span>ReactJS, react Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/diego3g">Acessar perfil no github</a>
          </li>
        </ul>
      </main>
    </div>
    
  );
}

export default App;
