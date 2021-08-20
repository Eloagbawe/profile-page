const button = document.querySelector('#sendMessage');
const fullname = document.querySelector('#name');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');

console.log("Elo Agbawe Idiodi")

const saveMessage = async (data) => {
    const fetchOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      credentials: 'include',
    };
    return await fetch(`/submit-message`, fetchOptions)
      .then((res) => res.json())
      .catch(() => ({
        error: 'Unable to connect to server. Please try again',
      }));
  };

const submit = async (event) =>{
    event.preventDefault();
    const contactObj = {
        name: fullname.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }
   const result = await saveMessage(contactObj)
   if (result._id) {
       
       alert("Your message is sent successfully!")
       console.log("successful")
      
       fullname.value = ""
       email.value = ""
       subject.value = ""
       message.value = ""
   }
}

button.addEventListener('click', submit)





