import React, { useState } from 'react'

export default function index() {
  const [techs, setTechs] = useState([]);

  function handleAddTech() {
    setTechs([...techs, 'NodeJS']);
  }

  return (
    <div>
      <ul data-testid="tech-list">
        {techs.map(tech => <li key={tech}>{tech}</li>)}
      </ul>
      <button onClick={handleAddTech}>Adicionar</button>
    </div>
  )
}
