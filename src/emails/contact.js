const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)



const sendContactEmail = async(email, sub, message)=> {
    const msg= {
        to: 'lhecontaact@gmail.com',
        from: 'adikwujohnnyboi1@gmail.com',
        subject: 'Welcome to this service',
        text: `Message from ${email}. \n ${sub}\n${message}`,
    }
    try{
        await sgMail.send(msg)
        console.log('success');
    } catch (e){
        console.log(e);
    }
}


module.exports= sendContactEmail
