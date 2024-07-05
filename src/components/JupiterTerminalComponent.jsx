import { useEffect } from 'react';

const JupiterTerminalComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'js/script.js';
    script.async = true;

    script.onload = () => {
      window.Jupiter.init({
        displayMode: "integrated",
        integratedTargetId: "integrated-terminal",
        endpoint: "https://docs-demo.solana-mainnet.quiknode.pro",
        passThroughWallet: true,
        strictTokenList: false,
        formProps: {
          fixedInputMint: false,
          fixedOutputMint: true,
          swapMode: "ExactIn",
          initialInputMint: "So11111111111111111111111111111111111111112",
          initialOutputMint: "MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5"  
        }
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="integrated-terminal"></div>
  );
};


export default JupiterTerminalComponent;
