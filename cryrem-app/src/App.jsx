import { useState } from 'react'
import './App.css'

function App() {
  const [screen, setScreen] = useState('home')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  function openQuickChat() {
    setScreen('chat')
  }

  function sendMessage() {
    const text = message.trim()

    if (!text) return

    setMessages((current) => [
      ...current,
      { type: 'user', text },
      {
        type: 'cryrem',
        text: 'Entendi! Essa é uma prévia do chat do Cryrem. Em breve vamos conectar a inteligência artificial aqui. 🤖',
      },
    ])

    setMessage('')
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      sendMessage()
    }
  }

  if (screen === 'chat') {
    return (
      <div className="cryrem-app">
        <aside className="sidebar">
          <div className="brand">
            <div className="brand-mascot">
              <div className="eye left"></div>
              <div className="eye right"></div>
              <div className="mouth"></div>
            </div>

            <span>Cryrem</span>
          </div>

          <button className="new-chat" onClick={() => setScreen('home')}>
            <span>＋</span>
            Novo chat
          </button>

          <nav className="menu">
            <button
              className="menu-item active"
              onClick={() => setScreen('home')}
            >
              <span>💬</span>
              Chat
            </button>

            <button className="menu-item">
              <span>📚</span>
              Meus Conteúdos
            </button>

            <button className="menu-item">
              <span>📅</span>
              Agenda
            </button>

            <button className="menu-item">
              <span>🏆</span>
              Certificados
            </button>

            <button className="menu-item">
              <span>🔥</span>
              Meus Postites
            </button>

            <button className="menu-item">
              <span>👤</span>
              Perfil
            </button>
          </nav>

          <div className="sidebar-bottom">
            <div className="streak-card">
              <span>🔥</span>
              <div>
                <strong>0 Postites</strong>
                <small>Comece sua sequência</small>
              </div>
            </div>
          </div>
        </aside>

        <main className="main-content chat-screen">
          <header className="chat-header">
            <button className="back-button" onClick={() => setScreen('home')}>
              ←
            </button>

            <div>
              <span className="welcome-small">Modo de estudo</span>
              <h1>⚡ Resposta Rápida e Prática</h1>
            </div>

            <div className="level">
              <span>⭐</span>
              Nível 1
            </div>
          </header>

          <section className="conversation">
            {messages.length === 0 ? (
              <div className="empty-chat">
                <div className="chat-mascot">🤖</div>

                <h2>O que você quer descobrir?</h2>

                <p>
                  Pergunte qualquer coisa e converse com o Cryrem.
                </p>
              </div>
            ) : (
              <div className="messages">
                {messages.map((item, index) => (
                  <div
                    className={`message-row ${item.type}`}
                    key={`${item.type}-${index}`}
                  >
                    <div className="message-bubble">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section className="chat-box">
            <div className="chat-tools">
              <button className="tool-active">
                ⚡ Resposta Rápida
              </button>

              <button onClick={() => setScreen('home')}>
                📚 Pasta de Estudo
              </button>
            </div>

            <div className="message-input">
              <input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Pergunte alguma coisa ao Cryrem..."
              />

              <div className="input-actions">
                <button type="button">＋</button>

                <button
                  type="button"
                  className="send-button"
                  onClick={sendMessage}
                >
                  ↑
                </button>
              </div>
            </div>

            <span className="input-note">
              O Cryrem pode ajudar você a aprender, revisar e organizar seus estudos.
            </span>
          </section>
        </main>
      </div>
    )
  }

  return (
    <div className="cryrem-app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mascot">
            <div className="eye left"></div>
            <div className="eye right"></div>
            <div className="mouth"></div>
          </div>

          <span>Cryrem</span>
        </div>

        <button className="new-chat" onClick={() => setScreen('chat')}>
          <span>＋</span>
          Novo chat
        </button>

        <nav className="menu">
          <button className="menu-item active">
            <span>💬</span>
            Chat
          </button>

          <button className="menu-item">
            <span>📚</span>
            Meus Conteúdos
          </button>

          <button className="menu-item">
            <span>📅</span>
            Agenda
          </button>

          <button className="menu-item">
            <span>🏆</span>
            Certificados
          </button>

          <button className="menu-item">
            <span>🔥</span>
            Meus Postites
          </button>

          <button className="menu-item">
            <span>👤</span>
            Perfil
          </button>
        </nav>

        <div className="sidebar-bottom">
          <div className="streak-card">
            <span>🔥</span>

            <div>
              <strong>0 Postites</strong>
              <small>Comece sua sequência</small>
            </div>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <span className="welcome-small">
              Seu espaço de aprendizagem
            </span>

            <h1>Olá! Eu sou o Cryrem 👋</h1>
          </div>

          <div className="level">
            <span>⭐</span>
            Nível 1
          </div>
        </header>

        <section className="hero-section">
          <div className="mascot-area">
            <div className="mascot">
              <div className="mascot-cap">
                <div className="cap-top"></div>
                <div className="cap-base"></div>
                <div className="tassel"></div>
              </div>

              <div className="mascot-face">
                <div className="face-eye left-eye"></div>
                <div className="face-eye right-eye"></div>
                <div className="cheek left-cheek"></div>
                <div className="cheek right-cheek"></div>
                <div className="face-mouth"></div>
              </div>
            </div>
          </div>

          <div className="hero-text">
            <span className="eyebrow">COMO POSSO TE AJUDAR?</span>

            <h2>
              Aprenda de um jeito
              <span> mais simples.</span>
            </h2>

            <p>
              Escolha como você quer usar o Cryrem hoje.
            </p>
          </div>

          <div className="mode-cards">
            <button
              className="mode-card quick"
              onClick={openQuickChat}
            >
              <div className="mode-icon">⚡</div>

              <div className="mode-info">
                <strong>Resposta Rápida e Prática</strong>

                <span>
                  Pergunte, tire dúvidas e receba uma resposta direta.
                </span>
              </div>

              <span className="arrow">→</span>
            </button>

            <button className="mode-card study">
              <div className="mode-icon">📚</div>

              <div className="mode-info">
                <strong>Pasta de Estudo</strong>

                <span>
                  Crie uma experiência completa para estudar um assunto.
                </span>
              </div>

              <span className="arrow">→</span>
            </button>
          </div>

          <section className="chat-box">
            <div className="chat-tools">
              <button
                className="tool-active"
                onClick={openQuickChat}
              >
                ⚡ Resposta Rápida
              </button>

              <button className="tool-active">
                📚 Pasta de Estudo
              </button>
            </div>

            <div className="message-input">
              <button
                className="fake-input"
                onClick={openQuickChat}
              >
                Pergunte alguma coisa ao Cryrem...
              </button>

              <div className="input-actions">
                <button>＋</button>

                <button
                  className="send-button"
                  onClick={openQuickChat}
                >
                  ↑
                </button>
              </div>
            </div>

            <span className="input-note">
              O Cryrem pode ajudar você a aprender, revisar e organizar seus estudos.
            </span>
          </section>
        </section>
      </main>
    </div>
  )
}

export default App