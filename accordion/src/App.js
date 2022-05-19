
import { useState } from 'react';
import data from './data';
import Questions from './Questions';

function App() {
  const [questions,setQuestion]=useState(data);
  return(
    <div className="container">
      <h3>questions and answers about login</h3>
      <section className="info">
        {questions.map(question=>{
          return <Questions key={question.id} {...question}/>
        })}
      </section>
    </div>
  )
}

export default App;
