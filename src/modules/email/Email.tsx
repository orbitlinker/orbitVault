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
        setHandlePostLoader(true);

        const { subject, emailIds, message } = emailForm;

        if (!subject.trim()) {
            toast.error("Subject is required!");
            setHandlePostLoader(false);
            return;
        }

        if (!emailIds.trim()) {
            toast.error("At least one email ID is required!");
            setHandlePostLoader(false);
            return;
        }

        if (!message.trim()) {
            toast.error("Message is required!");
            setHandlePostLoader(false);
            return;
        }

        const emailArray = emailIds
            .split(',')
            .map(email => email.trim())
            .filter(email => email.length > 0);

        const invalidEmails = emailArray.filter(email =>
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        );

        if (invalidEmails.length > 0) {
            toast.error(`Invalid email(s): ${invalidEmails.join(', ')}`);
            setHandlePostLoader(false);
            return;
        }

        const finalPayload = {
            subject: subject.trim(),
            emailIds: emailArray,
            message: message.trim()
        };
        setTimeout(() => {
            toast.success("Email sent successfully!");
            console.log('Sending email with payload:', finalPayload);
            setHandlePostLoader(false);
            reset();
        }, 2000);
    };

    const reset = () => {
        setEmailForm({
            subject: '',
            emailIds: '',
            message: ''
        })
    }


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