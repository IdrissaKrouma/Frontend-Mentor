import memory from './images/icon-memory.svg';
import reaction from './images/icon-reaction.svg';
import verbal from './images/icon-verbal.svg';
import visual from './images/icon-visual.svg';
import './App.css';

function Summary() {
  return (  
    <div className="right">
      <p id="summary">Summary</p>
      <div className="norm" id="reaction">
        <div className="norm_3" >
          <img src={reaction} alt=""/>
          <span id="span_reaction">Reaction</span>
        </div>
        <p><strong>80</strong> / 100</p>
      </div>
      <div className="norm" id="memory">
        <div className="norm_3" >
          <img src={memory} alt=""/>
          <span id="span_memory">Memory</span>
        </div>
        <p><strong>90</strong> / 100</p>
      </div>
      <div className="norm" id="verbal">
        <div className="norm_3" >
          <img src={verbal} alt=""/>
          <span id="span_verbal">Verbal</span>
        </div>
        <p><strong>61</strong> / 100</p>
      </div>
      <div className="norm" id="visual">
        <div className="norm_3" >
          <img src={visual} alt=""/>
          <span id="span_visual">Visual</span>
        </div>
        <p><strong>72</strong> / 100</p>
      </div>
      <button>Continue</button>
    </div>
  );
}

export default Summary;