exports.myMiddleware = (req, res, next) => {
  req.siteTitle = 'I like food';
  res.cookie('name', 'wes is cool', { maxAge: 3000 });

  if (req.siteTitle === 'I like food') {
    throw Error('Error.. Really??');
  }

  next();
}

exports.homePage = (req, res) => {
  res.render('index', {
    title: req.siteTitle,
  });
};