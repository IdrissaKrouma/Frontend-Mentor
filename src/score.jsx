import './App.css';

function Score() {
  return (
    <div className="left"> 
      <h3 id="title">Your Result</h3>
      <div className="rond">
        <h1 id="title_rond">76</h1>
        <span id='other_rond'>of 100</span>
      </div>
      <h2 id='great'>Great</h2>
      <p id='left_foot'>
        You scored highter than 65% of <br/>
        the people who have taken <br/>
        these tests
      </p>
    </div>
  );
}

export default Score;