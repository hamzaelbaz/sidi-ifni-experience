const form = document.querySelector("form"),
   nom = document.querySelector("#name"),
   email = document.querySelector("#email"),
   message = document.querySelector("#message"),
   tel = document.querySelector('#phone'),
   activity = document.querySelector('#activity'),
   program = document.querySelector('#program'),
   count = document.querySelector('#count'),
   formMessage = document.querySelector('.submition-message')
form.addEventListener("submit", async e => {
   e.preventDefault();
   let a = nom.value,
      n = email.value,
      o = message.value,
      c= activity.value,
      d = program.value,
      v = count.value,
      p = tel.value;
   try {
      await axios.post("/.netlify/functions/sendEmail", {
         name: a,
         emails: n,
         messages: o,
         tele: p,
         activities : c,
         programs : d,
         counts: v
      }), nom.value = "", email.value = "", message.value = "", tel.value = "" 
   } catch (s) {
      console.error("oups! elle y a une erreur:", s)
   }
   formMessage.style.display = 'block'
})