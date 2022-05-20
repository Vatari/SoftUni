function extractEmails(text) {
  let pattern =
    /(?:^| )([A-Za-z0-9]+[-._]*)+\b@([a-zA-Z]+\-*[a-zA-Z]+\.[a-zA-Z]+\-*[a-zA-Z]+)(\.*[a-zA-Z]+\-*[a-zA-Z]+)*/g;
  let extractedMails = text.match(pattern);

  extractedMails.forEach((mail) => console.log(mail));
}
extractEmails(
  "Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information."
);

