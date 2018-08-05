import * as React from 'react';

interface IProps {
    text?: string
}

const Header: React.SFC<IProps> = (props: IProps) => (
    <h1>{props.text}</h1>
);

Header.defaultProps = {
    text: 'Header'
};

export default Header;