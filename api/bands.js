module.exports = (req, res) => {
    const bands = [
      {
        name: 'Band 1',
        genre: 'Genre 1'
      },
      {
        name: 'Band 2',
        genre: 'Genre 2'
      },
      {
        name: 'Band 3',
        genre: 'Genre 3'
      },
    ]
    res.end(JSON.stringify(bands))
  }