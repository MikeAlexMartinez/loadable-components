import path from 'path'
import express from 'express'
import React from 'react'
import { match } from 'react-router'
import { renderToString } from 'react-dom/server'
import { ChunkExtractor } from '@loadable/server'

import Routes from '../client/App'

const app = express()

app.use(express.static(path.join(__dirname, '../../public')))

if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable global-require, import/no-extraneous-dependencies */
  const { default: webpackConfig } = require('../../webpack.config.babel')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpack = require('webpack')
  /* eslint-enable global-require, import/no-extraneous-dependencies */

  const compiler = webpack(webpackConfig)

  app.use(
    webpackDevMiddleware(compiler, {
      logLevel: 'silent',
      publicPath: '/dist/web',
      writeToDisk(filePath) {
        return /dist\/node\//.test(filePath) || /loadable-stats/.test(filePath)
      },
    }),
  )
}

const nodeStats = path.resolve(
  __dirname,
  '../../public/dist/node/loadable-stats.json',
)

const webStats = path.resolve(
  __dirname,
  '../../public/dist/web/loadable-stats.json',
)

function handleRedirect(res, redirect) {
  res.redirect(302, redirect.pathname + redirect.search);
}

function handleNotFound(res) {
  res.status(404).send('Not Found');
}

function handleError(res, err) {
  res.status(500).send(err.message);
}


function handleRouter(res, props) {
  const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats })
  const { default: App } = nodeExtractor.requireEntrypoint()
  
  const webExtractor = new ChunkExtractor({ statsFile: webStats })
  const jsx = webExtractor.collectChunks(<App {...props} />)
  
  const html = renderToString(jsx)
  
  const styleTags = webExtractor.getStyleTags()
  
  res.set('content-type', 'text/html')
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${webExtractor.getLinkTags()}
        ${styleTags}
      </head>
      <body>
        <div id="main">${html}</div>
        ${webExtractor.getScriptTags()}
      </body>
    </html>
  `);
}


function useMatch(req, res) {
  match({ routes: Routes, location: req.url }, (err, redirect, props) => {
    if (err) handleError(err);
    else if (redirect) handleRedirect(res, redirect);
    else if (props) handleRouter(res, props);
    else handleNotFound(res);
  })
}

app.get(
  '*',
  (req, res) => useMatch(req, res)
)

// eslint-disable-next-line no-console
app.listen(9000, () => console.log('Server started http://localhost:9000'))
