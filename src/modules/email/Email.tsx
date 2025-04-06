import {
    EmailContainer,
    FormWrapper,
    EmailWrapper,
    ButtonWrapper
} from './style';
import { HeadingWrapper } from '../common/Styles/testStyles';
import { IoSendSharp } from "react-icons/io5";
import { useState } from 'react';
import ButtonPostLoader from '../common/Components/buttonPostLoader/ButtonPostLoader';
import { toast } from 'react-toastify';
import { apiRequest } from './Services/getAPIRequest';
import { EmailForm, EmailFormHandler } from './utils/EmailFormHandler';
import TestEditor from '../common/Components/TextEditor/TestEditor';

const Email = () => {
    const [emailForm, setEmailForm] = useState<EmailForm>(EmailFormHandler.getInitialForm());
    const [handlePostLoader, setHandlePostLoader] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEmailForm(prev => ({ ...prev, [name]: value }));
    };

    const resetForm = () => setEmailForm(EmailFormHandler.getInitialForm());

    const submitHandler = () => {
        setHandlePostLoader(true);
        const handler = new EmailFormHandler(emailForm);
        const result = handler.validate();

        if (!result.valid) {
            toast.error(result.error || "Invalid form data");
            setHandlePostLoader(false);
            return;
        }

        const finalPayload = {
            subject: emailForm.subject.trim(),
            emailIds: result.emailArray!,
            message: emailForm.message.trim(),
            organisation: "orbitlinker"
        };
        // console.log(finalPayload);


        apiRequest(
            {
                endpoint: "/v1/email/bulk",
                method: "POST",
                data: finalPayload,
                type: "json"
            },
            (err, res) => {
                setHandlePostLoader(false);
                if (res) {
                    toast.success("Email sent successfully!");
                    resetForm();
                } else {
                    toast.error(err?.message || "Something went wrong!");
                }
            }
        );
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
                    {/* <textarea
                        name="message"
                        rows={10}
                        value={emailForm.message}
                        onChange={handleInputChange}
                        style={{ resize: 'none' }}
                        placeholder="Enter your message here"
                    /> */}
                    <TestEditor
                        value={emailForm.message}
                        onChange={(newContent: string) => setEmailForm(prev => ({
                            ...prev,
                            message: newContent
                        }))}
                    />
                </FormWrapper>
                <ButtonWrapper>
                    {handlePostLoader ? (
                        <ButtonPostLoader styles={{ padding: '20px 0' }} />
                    ) : (
                        <button onClick={submitHandler}>
                            Send <IoSendSharp />
                        </button>
                    )}
                </ButtonWrapper>
            </EmailWrapper>
        </EmailContainer>
    );
};

export default Email;
