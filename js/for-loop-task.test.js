describe('For loop', function() {

  function desc(func, test) {
    return func + '(' + test[0].join(', ') + ') должен возвращать "' + test[1] + '"';
  }

  describe('listAll', () => {
    var tests = [
      [ [1, 3], '1 2 3' ],
      [ [-1, 7], '-1 0 1 2 3 4 5 6 7' ],
      [ [1, -1], '' ],
      [ [1, 1], '1' ],
    ];
    tests.forEach(test => it(desc('listAll', test), () => {
      assert.equal(listAll.apply(null, test[0]), test[1]);
    }))
  });

  describe('listBetweenDesc', () => {
    var tests = [
      [ [1, 4], '3 2' ],
      [ [-1, 7], '6 5 4 3 2 1 0' ],
      [ [1, 1], '' ],
    ];
    tests.forEach(test => it(desc('listBetweenDesc', test), () => {
      assert.equal(listBetweenDesc.apply(null, test[0]), test[1]);
    }))
  });

});

