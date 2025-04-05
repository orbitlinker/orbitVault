import { ButtonPostLoaderContainer } from './style'

interface ButtonPostLoaderProps {
    styles?: React.CSSProperties;
    styleClassName?: any
}

const ButtonPostLoader: React.FC<ButtonPostLoaderProps> = ({ styles }) => {
    return (
        <ButtonPostLoaderContainer style={styles}>
            <div className="spinner center">
                {Array.from({ length: 12 }).map((_, idx) => (
                    <div className="spinner-blade" key={idx}></div>
                ))}
            </div>
        </ButtonPostLoaderContainer>
    );
};


export default ButtonPostLoader
