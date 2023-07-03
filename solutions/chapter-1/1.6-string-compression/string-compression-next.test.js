const {
    stringCompression
  } = require('./string-compression-next')
  
  test('When is possible to make the string compression', () => {
    expect(stringCompression('aabcccccaaa')).toBe('a2b1c5a3')
    expect(stringCompression('aabcccccaaaddeeeeiiioooooo')).toBe('a2b1c5a3d2e4i3o6')
  })
  
  test('When isn\'t possible to make the string compression', () => {
    expect(stringCompression('abcde')).toBe('abcde')
  })
  