import { Component, Prop, h, Host } from '@stencil/core';
import { createColorClasses } from '../../utils/utils';
import { Color } from '@ionic/core';

@Component({
  tag: 'dzu-bcrumbs',
  styleUrl: 'dzu-bcrumbs.scss',
  shadow: true
})
export class Bcrumbs {

  @Prop() color: Color = "primary";

  render() {
    const {color} = this;
    return <Host
        class={createColorClasses(color, {})}
      itemprop="breadcrumb" >
      <div class="bcrumbs noselect">
        <slot></slot>
      </div>
    </Host>
    ;
  }
}
