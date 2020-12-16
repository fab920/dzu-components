import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'dzu-bcrumb',
  styleUrl: 'dzu-bcrumb.scss',
  shadow: true
})
export class DzuBcrumb {

  /**
   *
   */
  @Prop() class: string;

  @Prop() color: string;

  @Prop() active: boolean;

  @Prop() disabled: boolean;

  private isActive() : object {
    return this.active ? {"aria-selected": 'true'} : {};
  }

  private isDisabled() : object {
    return this.disabled ? {"aria-disabled": 'true'} : {};
  }

  render() {
    return <div class="bcrumb {this.class}" {...this.isActive()} {...this.isDisabled()}>
      <div>
          <slot></slot>
      </div>
    </div>
    ;
  }
}
