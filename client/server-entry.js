import createApp from './create-app'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()

    router.push(context.url)
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.lenght) {
        return reject(new Error('no componentMatched'))
      }
      resolve(app)
    })
  })
}