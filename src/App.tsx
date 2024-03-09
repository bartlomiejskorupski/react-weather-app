import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>
        Weather app Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Ullam, quidem.
      </h1>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        accusamus temporibus animi natus, laboriosam ad facilis beatae dicta
        quis obcaecati.
      </h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ab
          exercitationem enim magni deleniti cupiditate quam eum quia unde animi
          ipsum vitae nihil eligendi, quae dolore omnis, doloribus ut! Placeat
          sunt, architecto, explicabo, quae enim voluptate nam ratione atque
          labore tempora non adipisci neque corporis quis culpa facere?
          Distinctio possimus autem veniam excepturi commodi voluptatum? Impedit
          aperiam incidunt saepe pariatur dolor, nostrum beatae. Beatae, nemo
          sed tempore similique excepturi incidunt aperiam perferendis impedit
          dolorem quia porro praesentium sapiente facilis maxime ducimus
          repellendus fugiat! Voluptates, mollitia expedita. Ipsa excepturi cum
          ab totam tenetur, dolor asperiores possimus dolorum aspernatur
          incidunt, omnis dolore.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
          nesciunt, reiciendis accusamus necessitatibus officia ab officiis
          ratione aspernatur rem ullam nostrum quae. Ratione at debitis sunt
          neque repellendus harum, nobis inventore, repudiandae aperiam veniam,
          corporis nihil quam perferendis excepturi doloremque eligendi rerum
          saepe animi. Nihil provident fugit dolorum ducimus nam.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
