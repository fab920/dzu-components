import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'dzu-bcrumbs',
  styleUrl: 'dzu-bcrumbs.scss',
  shadow: true
})
export class DzuBcrumbs {

  /**
   *
   */
  @Prop() class: string;

  @Prop() color: string;

  private getClass(): string {
    let str = "bcrumbs noselect " + this.class;
    return str;
  }


  render() {
    return <div>
      <div itemprop="breadcrumb" class={this.getClass()}>
        <slot></slot>
      </div>
    </div>
    ;
  }
}
