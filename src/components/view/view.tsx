import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'crypto-view',
  styleUrl: 'view.css',
  shadow: true
})

export class View {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
