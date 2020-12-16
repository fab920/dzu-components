import { EventEmitter } from '../../stencil-public-runtime';
import { Level } from '../level';
export declare class DzuAlert {
  el: HTMLElement;
  /**
   * Severity of the alert
   */
  level: Level;
  /**
   * src for an icon, otherwise one is choosen arording to severity
   */
  src: string;
  size: string;
  isCloseable: boolean;
  class: string;
  visible: boolean;
  closed: EventEmitter<DzuAlert>;
  private close;
  private getClass;
  render(): any;
}
