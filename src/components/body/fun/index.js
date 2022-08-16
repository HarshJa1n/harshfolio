import React from "react";
import "./fun.css";
import Separator from "../../common/separator/index";
function Fun() {
  return (
    <div className="fun">
      <Separator />
      <div class="quotes">
        <div id="quote-text" class="quote-text"></div>
      </div>
      <div class="controls">
      <a href="www.example.com" id="tweet" class="tweet button" target="_blank" rel="noopener noreferrer">Tweet Quote</a>
      <button onclick="newQuote()" class="new-quote button">New Quote</button> 
    </div>
    </div>
  );
}




export default Fun;