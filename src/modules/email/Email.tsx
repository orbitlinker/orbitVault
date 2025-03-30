import { EmailContainer, FormWrapper, EmailWrapper } from './style'
import { HeadingWrapper } from '../common/Styles/testStyles';
import { IoSendSharp } from "react-icons/io5";
const Email = () => {
    return (
        <EmailContainer>
            <EmailWrapper>
                <HeadingWrapper>
                    Sent any email from here
                </HeadingWrapper>
                <FormWrapper>
                    <input type="text" name="subject" placeholder='Enter your Subject' />
                    <input type="text" name='to' placeholder='Enter all email IDs, separated by commas.' />
                    <textarea name="message" rows={10} id="message" style={{ resize: "none" }} placeholder='Enter your message here' />
                </FormWrapper>
                <button>send<IoSendSharp /></button>
            </EmailWrapper>
        </EmailContainer>
    )
}

export default Email
