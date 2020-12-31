import React, { useState, useEffect, useCallback } from 'react';





const CyberpunkQuote = ({ quote, interval = 10000 }) => {

  const [quotes, setQuotes] = useState(quote);
  const [currentQuote, setCurrentQuote] = useState();

  const quote = [
    "We are the Electronic Minds, a group of free-minded rebels. Cyberpunks. We live in Cyberspace, we are everywhere, we know no boundaries. This is our manifest. The Cyberpunk's Manifest.",
    "We are those that see reality in a different way. Our point of view shows more than ordinary people can see.",
    "The Cyberpunk is no literature genre anymore, not even an ordinary subculture. The Cyberpunk is a stand-alone new culture, offspring of the new age. A culture that unites our common interests and views. We are a unit. We are Cyberpunks.",
    "People fear the new and unknown. They prefer the old, the known and checked truths. They are afraid of what the new can bring to them. They are afraid that they can lose what they have.",
    "The System. Centuries old, existing on principles that hang no more today. A System that has not changed much since the day of its birth.",
    "We fight for freedom of information. We fight for freedom of speech and press. For the freedom to express our thoughts freely, without being persecuted by the System.",
    "It is the Net that helps us spread the information freely. The Net, with no boundaries and information limit.",
    "We look in the net, and the net is growing wide and wider.",
    "It's so hard to live in this world, Cyberpunk.",
    "Some, trying to find their own world, the world of a Cyberpunk, and finding it, build their own world. Build in their thoughts, it changes reality, lays over it and thus they live in a virtual world. The thought-up, build upon reality.",
    "We build our worlds in Cyberspace."
  ];
  
  const getRandQuote = () => Math.floor(Math.random() * quote.length);

  const getRandomQuote = useCallback(() => {
    const randIndex = getRandomQuote(quotes);
    setCurrentQuote(quotes[randIndex]);
    setQuotes(quotes => quotes.filter((_, i) => i !== randIndex))
  }, [quotes]);

  useEffect(() => {
    !currentQuote && getRandomQuote();
    const timer = quotes.length && setInterval(getRandomQuote, interval);
    return () => clearInterval(timer);
  }, [currentQuote, getRandomQuote, interval, quotes]);

  return (
    <div>
      
    </div>
  );
}

export default CyberpunkQuote;
