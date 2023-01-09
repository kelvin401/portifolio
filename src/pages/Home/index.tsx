import React, { useCallback, useRef, useState } from 'react';
import './styles.css';

function Home() {
  function handleWhatsApp() {
    alert('Whatsapp');
  }

  function handleProfile() {
    alert('Perfil');
  }
  return (
    <main>
      <section>
        <header>
          <img
            src="https://pylmofpfvnlbkyptlhgf.supabase.co/storage/v1/object/public/avatars/103a8e68-17a0-43e4-8211-c535231fd527.png"
            alt=""
          />
          <h1>Edmilson Santos</h1>
          <span>Cuidador de Idosos</span>
          <div className="cost">
            Plantões a partir de <strong>R$ 120,00</strong>
          </div>
        </header>
        <h5>Sobre mim</h5>
        <p>
          Quando algo é importante o suficiente, você realiza, mesmo que as
          chances não estejam a seu favor.
        </p>

        <div className="buttons-containter">
          <div className="buttons-grid">
            <button onClick={handleWhatsApp}>Whatsapp</button>
            <button onClick={handleProfile}>Perfil na Cuid</button>
          </div>
        </div>
        <footer>
          <p>
            Feito com 💚 pela <a href="https://cuid.com.br">Cuid</a>
          </p>
        </footer>
      </section>
    </main>
  );
}

export default Home;
