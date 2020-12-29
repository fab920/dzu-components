/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 * TODO: Reduce rounding error
 */
/**
 * EXPERIMENTAL
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 *
 * If you give a cubic bezier curve that never reaches the
 * provided progression, this function will return an empty array.
 */
const getTimeGivenProgression = (t, a, h, M, r) => solveCubicBezier(t[1], a[1], h[1], M[1], r).map(r => solveCubicParametricEquation(t[0], a[0], h[0], M[0], r)), solveCubicParametricEquation = (t, a, h, M, r) => r * (3 * a * Math.pow(r - 1, 2) + r * (-3 * h * r + 3 * h + M * r)) - t * Math.pow(r - 1, 3), solveCubicBezier = (t, a, h, M, r) => solveCubicEquation((M -= r) - 3 * (h -= r) + 3 * (a -= r) - (t -= r), 3 * h - 6 * a + 3 * t, 3 * a - 3 * t, t).filter(t => t >= 0 && t <= 1), solveCubicEquation = (t, a, h, M) => {
  if (0 === t) return ((t, a, h) => {
    const M = a * a - 4 * t * h;
    return M < 0 ? [] : [ (-a + Math.sqrt(M)) / (2 * t), (-a - Math.sqrt(M)) / (2 * t) ];
  })(a, h, M);
  const r = (3 * (h /= t) - (a /= t) * a) / 3, o = (2 * a * a * a - 9 * a * h + 27 * (M /= t)) / 27;
  if (0 === r) return [ Math.pow(-o, 1 / 3) ];
  if (0 === o) return [ Math.sqrt(-r), -Math.sqrt(-r) ];
  const s = Math.pow(o / 2, 2) + Math.pow(r / 3, 3);
  if (0 === s) return [ Math.pow(o / 2, .5) - a / 3 ];
  if (s > 0) return [ Math.pow(-o / 2 + Math.sqrt(s), 1 / 3) - Math.pow(o / 2 + Math.sqrt(s), 1 / 3) - a / 3 ];
  const p = Math.sqrt(Math.pow(-r / 3, 3)), n = Math.acos(-o / (2 * Math.sqrt(Math.pow(-r / 3, 3)))), w = 2 * Math.pow(p, 1 / 3);
  return [ w * Math.cos(n / 3) - a / 3, w * Math.cos((n + 2 * Math.PI) / 3) - a / 3, w * Math.cos((n + 4 * Math.PI) / 3) - a / 3 ];
};

/**
 * Solve a cubic equation in one dimension (time)
 */ export { getTimeGivenProgression as g }