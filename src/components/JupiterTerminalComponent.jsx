import  { useEffect } from 'react';

const JupiterTerminalComponent = () => {
  useEffect(() => {
    const scriptUrl = 'https://terminal.jup.ag/main-v3.js';

    const loadScript = () => {
      const script = document.createElement('script');
      script.src = scriptUrl;
      script.async = true;

      script.onload = () => {
        window.Jupiter.init({
          displayMode: "integrated",
          integratedTargetId: "integrated-terminal",
          endpoint: "https://api.mainnet-beta.solana.com",
          defaultExplorer: "Solscan",
          formProps: {
            swapMode: "ExactIn",
            initialOutputMint: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
            initialSlippageBps: 0,
          },
          useUserSlippage: false,
        });
      };

      script.onerror = (error) => {
        console.error('Error loading Jupiter Terminal script:', error);
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    };

    loadScript();
  }, []);

  return <div id="integrated-terminal"></div>;
};

export default JupiterTerminalComponent;
