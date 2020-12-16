import { Component, Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'dzu-bottomnav',
  styleUrl: 'dzu-bottomnav.scss',
  shadow: true
})

export class DzuBottomnav {

  @Element() el: HTMLElement;

  @Prop() class: string;

  private getClass(): string {
    return "bottomnav " + this.class;
  }

  render() {
    return (
      <ol class={this.getClass()} role="tablist">
        <slot></slot>
      </ol>
    );
  }
}
