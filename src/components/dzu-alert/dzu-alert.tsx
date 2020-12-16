import { Component, Element, Event, EventEmitter, Prop, State, h } from '@stencil/core';
import { createAnimation } from '@ionic/core';

import { Level } from '../level';

const style = {
  info: {
    color: "darkgray",
    background: "bg-blue",
    icon: "information",
  },
  warning: {
    color: "darkgray",
    background: "bg-yellow",
    icon: "warning",
  },
  error: {
    color: "white",
    background: "bg-red",
    icon: "report",
  }
};

@Component({
  tag: 'dzu-alert',
  styleUrl: 'dzu-alert.scss',
  shadow: true
})

export class DzuAlert {

  @Element() el: HTMLElement;

  /**
   * Severity of the alert
   */
  @Prop() level: Level;

  /**
   * src for an icon, otherwise one is choosen arording to severity
   */
  @Prop() src: string;

  @Prop() size: string;

  @Prop() isCloseable: boolean;

  @Prop() class: string;

  @State() visible: boolean = true;

  @Event() closed: EventEmitter<DzuAlert>;

  private async close() {
    const anim = createAnimation()
      .addElement(this.el)
      .duration(300)
      .fromTo('opacity', '1', '0');
      await anim.play();
      this.visible = false;
      this.closed.emit(this);
  }

  private getClass(): string {
    return "alert " + style[this.level].background;
  }

  render() {
    return (
      <div class={this.getClass()} style={{ display: this.visible ? 'flex' : 'none' }}>
        <div>
          <dzu-icon name={style[this.level].icon} size={24} color={style[this.level].color}/>
        </div>
        <span>
          <slot></slot>
        </span>
        {this.isCloseable
          ? <div class="is-clickable tf-right" onClick={() => this.close()} title="close">
              <dzu-icon name="close" size={24} color="red"/>
            </div>
          : ""
          }
      </div>
    );
  }
}