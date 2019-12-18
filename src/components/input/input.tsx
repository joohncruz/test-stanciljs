import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'tk-input',
})

export class Input {
    @Prop() placeholder: string;
    @Prop() value: string;

    render() {
        return (
            <input value={this.value} placeholder={this.placeholder}  />
        )
    }
}