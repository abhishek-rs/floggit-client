const getAll = () => new Promise((resolve) => {
  resolve([{
    id: '1a',
    name: 'testName',
  }]);
});

export default { getAll };
