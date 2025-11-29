const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
    try {
        const requestBody = JSON.parse(event.body);
        console.log('Parsed request body:', requestBody);

        const { name, messages, emails, tele, activities, programs, counts } = requestBody;

        console.log('Email details:', { name, messages, emails, tele, activities, programs, counts });

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'elbazhamzahb@gmail.com',
                pass: 'dgmi mkqx jwzy ptrt',
            },
        });

        let message = {
            from: 'elbazhamzahb@gmail.com',
            to: 'elbazhamza77@gmail.com',
            subject: 'Email de Contact',
            text: 'Hello world?',
            html: `
        <!doctype html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Simple Transactional Email</title>
    <style media="all" type="text/css">
    /* -------------------------------------
    GLOBAL RESETS
------------------------------------- */
    
    body {
      font-family: Helvetica, sans-serif;
      -webkit-font-smoothing: antialiased;
      font-size: 16px;
      line-height: 1.3;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }
     
    div {
      margin-bottom : 12px;
    }
    </style>
  </head>
  <body> 
<p>Salut</p>
<p>Voici le <strong>Message de contact</strong> 
<div>
<h6>Name :</h6>
<p>${name}</p>
</div>
<div>
<h6>Email :</h6>
<p>${emails}</p>
</div>
<div>
<h6>Phone :</h6>
<p>${tele}</p>
</div>
<div>
<h6>Nomber of participans :</h6>
<p>${counts}</p>
</div>
<div>
<h6>Program :</h6>
<p>${programs || 'No program has been chosen'}</p>
</div>
<div>
<h6>Activity :</h6>
<p>${activities || 'No activity has been chosen'}</p>
</div>
<div>
<h6>Activity :</h6>
<p>${messages}</p>
</div> 
</p>  
<footer>
<a href="https://sidiifniexperience.com/">sidiifniexperience.com</a>.
</footer>
  </body>
</html>

        `,
        };

        await transporter.sendMail(message);

        return {
            statusCode: 201,
            body: JSON.stringify({ msg: 'Email sent successfully' }),
        };
    } catch (error) {
        console.error('Error:', error);

        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send email' }),
        };
    }
};