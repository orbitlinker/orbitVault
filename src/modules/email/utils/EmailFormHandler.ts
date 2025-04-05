export interface EmailForm {
    subject: string;
    emailIds: string;
    message: string;
}

export class EmailFormHandler {
    formData: EmailForm;

    constructor(formData: EmailForm) {
        this.formData = formData;
    }

    validate(): { valid: boolean; emailArray?: string[]; error?: string } {
        const { subject, emailIds, message } = this.formData;

        if (!subject.trim()) {
            return { valid: false, error: "Subject is required!" };
        }

        if (!emailIds.trim()) {
            return { valid: false, error: "At least one email ID is required!" };
        }

        if (!message.trim()) {
            return { valid: false, error: "Message is required!" };
        }

        const emailArray = emailIds
            .split(',')
            .map(email => email.trim())
            .filter(email => email.length > 0);

        const invalidEmails = emailArray.filter(email =>
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        );

        if (invalidEmails.length > 0) {
            return {
                valid: false,
                error: `Invalid email(s): ${invalidEmails.join(', ')}`
            };
        }

        return { valid: true, emailArray };
    }

    static getInitialForm(): EmailForm {
        return {
            subject: '',
            emailIds: '',
            message: ''
        };
    }
}
