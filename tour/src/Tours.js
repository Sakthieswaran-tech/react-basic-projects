import React from 'react'
import Tour from './Tour'

function Tours({tour,removeTour}) {
  return (
    <section>
        <div className="title">
            <h2>our tours</h2>
            <div className="underline"></div>
            <div>
                {tour.map((t)=>{
                    return <Tour key={t.id} {...t} removeTour={removeTour}/>
                })}
            </div>
        </div>
    </section>
  )
}

export default Tours