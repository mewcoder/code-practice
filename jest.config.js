module.exports = {
  transform: {
    "^.+\\.js$": "babel-jest",
    '^.+\\.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: ['node_modules'],
}
