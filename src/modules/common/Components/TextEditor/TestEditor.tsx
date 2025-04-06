// TestEditor.tsx
import { TextEditorContainer } from './style';
import JoditEditor from 'jodit-react';
import { useRef, useMemo } from 'react';

const TestEditor = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
    const editor = useRef(null);

    const config = useMemo(() => ({
        toolbarAdaptive: false,
        buttons: [
            'bold',
            'italic',
            'underline',
            '|',
            'ul',
            'ol',
            '|',
            'link',
            '|',
            'fontsize',
            'font'
        ],
        showCharsCounter: false,
        showWordsCounter: false,
        showPoweredBy: false,
        statusbar: false,
        style: {
            background: '#ecedeeb3',
        }
    }), []);

    return (
        <TextEditorContainer>
            <JoditEditor
                ref={editor}
                value={value}
                config={config}
                tabIndex={1}
                onBlur={newContent => onChange(newContent)} // Update on blur
                onChange={() => { }} // avoid frequent re-renders
            />
        </TextEditorContainer>
    );
};

export default TestEditor;
