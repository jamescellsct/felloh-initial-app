/**
 *
 * Asynchronously loads the component for InfoCapturePage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const InfoCapturePage = lazyLoad(
  () => import('./index'),
  module => module.InfoCapturePage,
);
