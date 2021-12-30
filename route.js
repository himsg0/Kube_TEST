
app.get('/', function(req, res, next) {
  res.render('contact-us', { title: 'Contact-Us' });
});
 
app.post('/contact-us', function(req, res, next) {
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var address = req.body.address;
  var phone_no = req.body.phone_no;
  var profile_photo = req.body.profile_photo;
 
  var sql = `INSERT INTO contacts (first_name, last_name, address, phone-no, profile_photo) VALUES ("${first_name}", "${last_name}", "${address}", "${phone_no}","${profile_photo}", NOW())`;
  db.query(sql, function(err, result) {
    if (err) throw err;
    console.log('record inserted');
    req.flash('success', 'Data added successfully!');
    res.redirect('/');
  });
});