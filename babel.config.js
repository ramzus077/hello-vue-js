module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
module.exports = api => ({
  presets: ['@vue/app'],
  ...(api.env('test') && { plugins: ['require-context-hook'] }),
});