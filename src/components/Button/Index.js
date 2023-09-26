import { ButtonStyle } from './styleButton'

const Button = ({title, onClick}) => {
    return (
        <ButtonStyle onClick={onClick} type='button'>
            {title}
        </ButtonStyle>
    );
}

export default Button;
