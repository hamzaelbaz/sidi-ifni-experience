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
      margin-bottom : 1rem;
    }
     h5 {
      margin:0;
     }
     p {
      margin-top:8px;
      font-size:1.2rem;
      font-weight:600;
     }
    </style>
  </head>
  <body> 
<p>Salut</p>
<p>Voici le <strong>Message de contact</strong> 
<div>
<h5>Name :</h5>
<p>${name}</p>
</div>
<div>
<h5>Email :</h5>
<p>${emails}</p>
</div>
<div>
<h5>Phone :</h5>
<p>${tele}</p>
</div>
<div>
<h5>Nomber of participans :</h5>
<p>${counts}</p>
</div>
<div>
<h5>Program :</h5>
<p>${programs || 'No program has been chosen'}</p>
</div>
<div>
<h5>Activity :</h5>
<p>${activities || 'No activity has been chosen'}</p>
</div>
<div>
<h5>Activity :</h5>
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