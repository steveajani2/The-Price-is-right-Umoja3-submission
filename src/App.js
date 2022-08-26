import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';

import './App.css';
import { views } from './helpers/constants.js';
import { useEffect, useState } from 'react';

//views
import { 
  ConnectAccount,
  DeployOrAttach,
  Deploying,
  WaitForAttacher,
  AcceptWager,
  Attaching,
  WaitForTurn,
  PlayTurn,
  Timeout,
  SeeWinner,
  PasteContractInfo
} from './views/';

const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback( { providerEnv: 'TestNet', MyAlgoConnect } ));
const { standardUnit } = reach;

function App() {
  const [ view, setView ] = useState(views.CONNECT_ACCOUNT);
  const [ guess, setGuess ] = useState(undefined);
  const [ round, setRound ] = useState(0);
  const [ outcome, setOutcome ] = useState(0);
  const [ getHand, setGetHand ] = useState(false);
  const [ playedTurn, setPlayedTurn ] = useState(false);
  const [ account, setAccount ] = useState({});
  const [ isAlice, setIsAlice ] = useState(true);
  const [ resolver, setResolver ] = useState();
  const [ contractInfo, setContractInfo ] = useState("");
  const [ wager, setWager ] = useState();
  const [ overall, setOverall ] = useState(false)

  const helperFunctions = {
    connect: async (secret) => {
      let result = ""
      try {
        const account = await reach.getDefaultAccount();
        setAccount(account);
        setView(views.DEPLOY_OR_ATTACH);
        result = 'success';
      } catch (error) {
        result = 'failed';
      }
      return result;
    },

    setAsAlice: (alice = true) => {
      if(alice){
        setIsAlice(true);
      }
      else{
        setIsAlice(false);
      }
      setView(views.PASTE_CONTRACT_INFO);
    },

    deploy: async (wager) => {
      const contract = account.contract(backend);
      const deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector];
      House.wager = reach.parseCurrency(wager);
      House.deadline = deadline;
      backend.House(contract, House);
      setView(views.DEPLOYING);
      setContractInfo( JSON.stringify(await contract.getInfo(), null, 2) );
      setView(views.WAIT_FOR_ATTACHER)
    },

    attach: (contractInfo) => {
      const contract = account.contract(backend, JSON.parse(contractInfo));
      isAlice ? 
        backend.Alice(contract, Alice)
        :
        backend.Bob(contract, Bob)
    },

    guess: (hand) => {
      setGuess(hand)
    },

    played: () => {
      setPlayedTurn(true);
      setView(views.WAIT_FOR_TURN)
    },

    playAgain: () => {
      setView(views.DEPLOY_OR_ATTACH);
      setRound(0);
    }

  };

  const Player = {
    random: () => reach.hasRandom.random(),

    round: () => {
      setRound(round => round + 1);
      setView(views.PLAY_TURN);
      setGuess(undefined);
      setPlayedTurn(false);
      setResolver();
    },

    seeOutcome: (outcomeHex) => {
      const outcome = parseInt(outcomeHex);
      setOutcome(outcome)
      setView(views.SEE_WINNER)
    },

    seeOverallOutcome: (outcomeHex) => {
      const outcome = parseInt(outcomeHex);
      setOutcome(outcome)
      setOverall(true)
      setView(views.SEE_WINNER)
    },    

    informtimeout: (deadline) => {
      setView(views.TIME_OUT);
    },

    submit_guess: async () => {
      setGetHand(true);
      return new Promise(resolve => {
        setResolver({
          resolve: (hand) => {
            resolve(hand);
          },
        })
      })
    },

    Acceptwager: async (wager) => {
      setView(views.ACCEPT_WAGER);
      setWager(reach.formatCurrency(wager, 4));
      return new Promise((resolve) => {
        setResolver({
          resolve: () => {
            setView(views.ATTACHING);
            resolve(1);
          },
        })
      });
    },
  }

  const Alice = {
    ...Player,
  }

  const Bob = {
    ...Player,
  }

  const House = {
    random: () => reach.hasRandom.random(),

    wager: 0,

    deadline: 0,

    number_guess: () => {
      const random = Math.floor(Math.random() * 15) + 1
      console.log('random', random)
      return random
    },
  
    setWagerAndDeadline: ( wager, deadline) => {
      this.wager = wager;
      this.deadline = deadline;
    },
  
    waitingForAttacher: () => {
      setView(views.WAIT_FOR_ATTACHER);
    },

    seeOverallOutcome: (outcomeHex) => {
      const outcome = parseInt(outcomeHex);
      setOutcome(outcome)
      setView(views.HOUSE_SEE_OUTCOME)
    },

  }

  useEffect(()=>{
    if(getHand && playedTurn){
      resolver.resolve(guess);
      setGetHand(false);
    }
  }, [getHand, playedTurn, guess, resolver])


  return (
    <div className="App">

      <div className='topnav'>
        <h2>Price Is Right</h2>
      </div>
      
      {
        view === views.CONNECT_ACCOUNT &&
        <ConnectAccount connect={helperFunctions.connect}/>
      }

      {
        view === views.DEPLOY_OR_ATTACH &&
        <DeployOrAttach setAsAlice={helperFunctions.setAsAlice} deploy={helperFunctions.deploy}/>
      }

      {
        view === views.DEPLOYING &&
        <Deploying />
      }

      {
        view === views.WAIT_FOR_ATTACHER &&
        <WaitForAttacher contractInfo={contractInfo}/>
      }

      {
        view === views.PASTE_CONTRACT_INFO && 
        <PasteContractInfo attach={helperFunctions.attach}/>
      }

      {
        view === views.ACCEPT_WAGER &&
        <AcceptWager wager={wager} standardUnit={standardUnit} accept={resolver.resolve} decline={() => setView(views.DEPLOY_OR_ATTACH)}/>
      }

      {
        view === views.ATTACHING &&
        <Attaching />
      }

      {
        view === views.WAIT_FOR_TURN &&
        <>
          <WaitForTurn />
          <hr />
          {
            guess !== undefined && <h3 className='guess'>You played {guess}</h3>
          }
        </>
        
      }

      {
        view === views.PLAY_TURN && 
        <PlayTurn 
          guess={helperFunctions.guess} 
          played={helperFunctions.played}
          round={round}
        />
      }

      {
        view === views.TIME_OUT &&
        <Timeout />
      }

      {
        view === views.SEE_WINNER &&
        <SeeWinner outcome={outcome} isAlice={isAlice} playAgain={helperFunctions.playAgain} overall={overall}/>
      }

      {
        view === views.HOUSE_SEE_OUTCOME &&
        <div>
          <p>{ outcome === 1 ? 'Alice wins' : outcome === 2? 'Bob wins' : outcome === 3? 'There was a draw' : 'Alice and Bob both lost'}</p>
        </div>
      }
    </div>
  );
}

export default App;
