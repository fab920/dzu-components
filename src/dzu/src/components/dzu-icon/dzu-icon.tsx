import { Component, Prop,  h } from '@stencil/core';

@Component({
  tag: 'dzu-icon',
  styleUrl: 'dzu-icon.scss',
  shadow: true
})
export class DzuIcon {
  /**
   * src for an icon, otherwise one is choosen arording to severity
   */
  @Prop() color: string;

  @Prop() size: number = 22;

  @Prop() name: string;

  private getClass() : string {
    return this.color + " fs-" + this.size;
  }
  render() {
    return (
      <ion-icon name={this.name} class={this.getClass()}></ion-icon>
    );
  }
}
