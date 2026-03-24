import { useState } from 'preact/hooks';

export default function Greeting({ messages, translations }) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! {translations.thanks}</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        {translations.newGreeting}
      </button>
    </div>
  );
}
