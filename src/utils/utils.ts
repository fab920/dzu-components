import { Color, CssClassMap } from '@ionic/core';

export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}

// https://github.com/ionic-team/ionic-framework/blob/master/core/src/utils/theme.ts
// export const createColorClasses = (color: Color | undefined | null, cssClassMap: CssClassMap): CssClassMap => {
//   return (typeof color === 'string' && color.length > 0) ? {
//     'ion-color': true,
//     [`ion-color-${color}`]: true,
//     ...cssClassMap
//   } : {'ion-color': true ,
//     'ion-color-primary' : true,
//     ... cssClassMap
//   };
// }

export const createColorClasses = (color: Color | undefined | null, cssClassMap: CssClassMap): CssClassMap => {
  return (typeof color === 'string' && color.length > 0) ? {
    'ion-color': true,
    [`ion-color-${color}`]: true,
    ...cssClassMap
  } : cssClassMap;
}
