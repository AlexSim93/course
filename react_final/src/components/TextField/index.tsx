import * as React from 'react';

interface ITextFieldProps {
    id: string;
    value: string;
    onChange?(evt: any): void;
};

class TextField extends React.Component<ITextFieldProps> {
    public render() {
        return (
            <div className='form__text-container'>
                <label className='form__text-container-label' htmlFor={this.props.id}>Find your movie</label>
                <input className='form__text-container-input' type='search' name='search' value={this.props.value} onChange={this.props.onChange} id={this.props.id} />
            </div>
        );
    }
}

export default TextField;