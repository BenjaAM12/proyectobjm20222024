function helloWorldTest() {
    const actual = document.querySelector('h1').textContent;
    const expected = 'Hello World';
    assert.equal(actual, expected);
  }
  
  // Run the test
  helloWorldTest();