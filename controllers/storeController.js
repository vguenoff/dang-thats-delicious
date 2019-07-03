exports.homePage = (req, res) => {
    res.render('index', {
      title: 'I like food',
    });
    
    // const wes = { name: 'wes', age: 100, cool: true };
  
    // res.send('Hey! It works!');
    // res.json(wes);
    // res.send(req.query.name);
    // res.json(req.query);
    
    // res.render('hello', {
    //   name: 'wes',
    //   dog: req.query.dog,
    //   title: 'I like food'
    // });
  };