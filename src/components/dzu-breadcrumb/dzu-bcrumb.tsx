import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

import { createColorClasses } from '../../utils/utils';

@Component({
  tag: 'dzu-bcrumb',
  styleUrl: 'dzu-bcrumb.scss',
  shadow: true
})
export class DzuBcrumb {

  @Prop({ reflect: true }) active : boolean = false;

  @Prop({ reflect: true }) disabled : boolean = false;

  /**
   * Emitted when the breadcrumb has focus.
   */
  @Event() ionFocus!: EventEmitter<void>;

  /**
   * Contains a URL or a URL fragment that the hyperlink points to.
   * If this property is set, an anchor tag will be rendered.
   */
  @Prop() href: string | undefined;

  /**
   * Emitted when the breadcrumb loses focus.
   */
  @Event() ionBlur!: EventEmitter<void>;

  private onFocus = () => {
    this.ionFocus.emit();
  }

  private onBlur = () => {
    this.ionBlur.emit();
  }

  render() {
    const {active, disabled} = this;
    return (
      <Host
        class={createColorClasses(null, {
          'ion-activatable': !this.disabled,
          'ion-focusable': !this.disabled,
        })}
        aria-disabled={disabled ? 'true' : null}
        aria-selected={active ? 'true' : null}
      >
        <div
          class={{"bcrumb": true, "disabled": disabled, "active": active}}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
