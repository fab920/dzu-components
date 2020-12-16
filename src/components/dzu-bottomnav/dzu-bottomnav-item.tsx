import { Component, Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'dzu-bottomnav-item',
  styleUrl: 'dzu-bottomnav-item.scss',
  shadow: true
})

export class DzuBottomnavitem {

  @Element() el: HTMLElement;

  @Prop() class: string;

  @Prop() src: string;

  @Prop() icon: string;

  @Prop() active: boolean;

  @Prop() href: string;

  private isActive() : object {
    return this.active ? {"aria-selected": 'true'} : {};
  }

  // DEPRECATED
  private parseImg(src) : string {
    let path = src.split("/");
    return (path.pop().split("."))[0];
  }

  render() {
    return (
      <li role="tab" {...this.isActive()}>
        <a href={this.href}>
          <div class="icon">
            <dzu-icon name={this.icon ? this.icon : this.parseImg(this.src)} size={24} color="darkgray"/>
          </div>
          <div class="title">
            <slot></slot>
          </div>
        </a>
      </li>
    );
  }
}
