
exports.index = function(req, res){
  res.render('default', {
    title: 'Home',
    classname: 'home',
    users: ['Jerry', 'Justin', 'Cassandra']
  });
}


exports.about = function(req, res){
  res.render('default', {
    title: 'About Us',
    classname: 'about-us'
  });
}
