import '../styles/Contact.scss';
import copy from 'clipboard-copy';
import { useRef, useState } from 'react';

const Contact = () => {
  const textRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const textToCopy = textRef.current.textContent;
    copy(textToCopy);
    setCopied(true);
    console.log('hi');
    setTimeout(() => {
      setCopied(false);
    }, 800);
  };

  return (
    <div className="contact-root-div">
      <h1>
        Je suis <span>disponible</span>
      </h1>
      <div className="copy-email">
        <div className="email-bg">
          <h1 ref={textRef}>soulimane.a@protonmail.com</h1>
          <button className="copy-button" onClick={handleCopyClick}>
            <div className="copy-button-bg">
              {copied === false ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g>
                    <path d="M15.24 2h-3.894c-1.764 0-3.162 0-4.255.148c-1.126.152-2.037.472-2.755 1.193c-.719.721-1.038 1.636-1.189 2.766C3 7.205 3 8.608 3 10.379v5.838c0 1.508.92 2.8 2.227 3.342c-.067-.91-.067-2.185-.067-3.247v-5.01c0-1.281 0-2.386.118-3.27c.127-.948.413-1.856 1.147-2.593c.734-.737 1.639-1.024 2.583-1.152c.88-.118 1.98-.118 3.257-.118h3.07c1.276 0 2.374 0 3.255.118A3.601 3.601 0 0 0 15.24 2Z" />
                    <path d="M6.6 11.397c0-2.726 0-4.089.844-4.936c.843-.847 2.2-.847 4.916-.847h2.88c2.715 0 4.073 0 4.917.847c.843.847.843 2.21.843 4.936v4.82c0 2.726 0 4.089-.843 4.936c-.844.847-2.202.847-4.917.847h-2.88c-2.715 0-4.073 0-4.916-.847c-.844-.847-.844-2.21-.844-4.936v-4.82Z" />
                  </g>
                </svg>
              ) : (
                <svg
                  className="done-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="m9 16.2l-3.5-3.5a.984.984 0 0 0-1.4 0a.984.984 0 0 0 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7a.984.984 0 0 0 0-1.4a.984.984 0 0 0-1.4 0L9 16.2z" />
                </svg>
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
