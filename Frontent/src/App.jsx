import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
//Editor
import Editor from "react-simple-code-editor"
//rehpeHighlight
import rehpeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
//prism
import prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"


import Markdowm from "react-markdown"

function App() {

  const [code, setCode] = useState(` function sum() {
  return 1 + 1
}`)

  const [review, setReview] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  async function reviewCode() {
    setIsLoading(true)
    const response = await axios.post('http://localhost:3000/ai/get-review', { code })
    setReview(response.data)
    setIsLoading(false)
  }

  useEffect(() => {
    prism.highlightAll()
  }, [])
  return (
    <main>
      <div className="left">

        <div className="code">

          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding={10}
            style={{
              fontSize: 20,
              height: "100%",
              width: "100%"
            }}
          />

        </div>
        <div
          className="review"
          onClick={reviewCode}
        >{isLoading? "Loading..." : "Review"}</div>
      </div>
      <div className="right">
        <Markdowm
        rehpePlugins={[ rehpeHighlight ]}
        >
{review}
</Markdowm>
      </div>
    </main>
  )
}

export default App
