Meteor.startup(function () {
  smtp = {
    username: 'postmaster@sandbox6c4d2bc3fa6a44689ee99c8650baef67.mailgun.org',   // eg: server@gentlenode.com
    password: '9d1687139bfc07ce32ca64ecb0952202',   // eg: 3eeP1gtizk5eziohfervU
    server:   'smtp.mailgun.org',  // eg: mail.gandi.net
    port: 25
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});