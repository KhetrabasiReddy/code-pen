import React from 'react'
import Editor from './Editor';

import { useState, useEffect } from 'react';

export default function App() {

  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js,setJs] = useState('');
  const [srcDoc,setSrcDoc] = useState('');
  useEffect( () => {
    const timeout = setTimeout(()=>{
      setSrcDoc(
        ` <html>
              <head>
                <style>${css}</style>
              </head>
              <body>
                ${html}
                <script>${js}</script>
              </body>
            </html>
          `)
    },500);
    return () => clearTimeout(timeout);
  },[html, css, js]);


  return (
    <>
      <div className='pane top-pane'>
        <Editor
          language='xml'
          displayName='HTML'
          value={html}
          onChange={setHtml}
        />
        <Editor
          language='css'
          displayName='CSS'
          value={css}
          onChange={setCss}
        />
        <Editor
          language='javascript'
          displayName='JS'
          value={js}
          onChange={setJs}
        />

      </div>
      <div className='pane'>
        <iframe
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          frameBorder='0'
          width='100%'
          height='100%'
        />

      </div>
    </>
  );
}
