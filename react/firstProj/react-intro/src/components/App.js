import Article from './Article'
import React from 'react'
import articles from '../fixtures'

function App() {
    return(
        <div>
            <h1>App name</h1>
            <Article article={articles[0]}/>
        </div>
    )
}

export default App