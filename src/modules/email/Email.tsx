import { EmailContainer, FormWrapper, EmailWrapper, ButtonWrapper } from './style'
import { HeadingWrapper } from '../common/Styles/testStyles';
import { IoSendSharp } from "react-icons/io5";
import { useState } from 'react';
import ButtonPostLoader from '../common/Components/buttonPostLoader/ButtonPostLoader';
import { toast } from 'react-toastify';
const Email = () => {
    const [emailForm, setEmailForm] = useState({
        subject: '',
        emailIds: '',
        message: ''
    });
    const [handlePostLoader, setHandlePostLoader] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEmailForm(prev => ({ ...prev, [name]: value }));
    };

    const submitHandler = () => {
        setHandlePostLoader(true)
        console.log(handlePostLoader);

        const emailArray = emailForm.emailIds
            .split(',')
            .map(email => email.trim())
            .filter(email => email.length > 0);

        const finalPayload = {
            subject: emailForm.subject,
            emailIds: emailArray,
            message: emailForm.message
        };
        toast("Wow so easy!")
        console.log('Sending email with payload:', finalPayload);
    };

    return (
        <EmailContainer>
            <EmailWrapper>
                <HeadingWrapper>Send any email from here</HeadingWrapper>
                <FormWrapper>
                    <input
                        type="text"
                        name="subject"
                        value={emailForm.subject}
                        onChange={handleInputChange}
                        placeholder="Enter your Subject"
                    />
                    <input
                        type="text"
                        name="emailIds"
                        value={emailForm.emailIds}
                        onChange={handleInputChange}
                        placeholder="Enter all email IDs, separated by commas."
                    />
                    <textarea
                        name="message"
                        rows={10}
                        value={emailForm.message}
                        onChange={handleInputChange}
                        style={{ resize: 'none' }}
                        placeholder="Enter your message here"
                    />
                </FormWrapper>
                <ButtonWrapper>
                    {
                        !handlePostLoader ? (
                            <button onClick={submitHandler}>
                                Send <IoSendSharp />
                            </button>
                        ) : (
                            <ButtonPostLoader styles={{ padding: '20px 0' }} />
                        )
                    }
                </ButtonWrapper>
            </EmailWrapper>
        </EmailContainer>
    );
};

export default Email;