import Layout from '@/components/Layout';
import React from 'react'

const Form = () => {
  const formHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Add you prompt</title>
      <style>*{margin:0;padding:0;} html,body,#wrapper{width:100%;height:100vh;} iframe{border-radius:0 !important;}</style>
    </head>
    <body>
      <div data-tf-widget="vfKDEgim" id="wrapper" data-tf-opacity="0" data-tf-inline-on-mobile data-tf-iframe-props="title=Add you prompt" data-tf-transitive-search-params data-tf-auto-focus data-tf-medium="snippet"></div><script src="//embed.typeform.com/next/embed.js"></script>
    </body>
    </html>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: formHtml }} />

  )
}

export default Form
