const getAll = () => new Promise((resolve) => {
  resolve([{
    id: '1a',
    whiteboardId: '1b',
    title: 'testTitle',
    information: [{}],
    color: 'DEFAULT',
    display: true,
  }]);
});

export default { getAll };
