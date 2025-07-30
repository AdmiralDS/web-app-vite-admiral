import { css } from 'styled-components';

/**
 * Configuration for Scrollbox factory.
 *
 * @property {number} [stickyHeaderHeightPx] - height of sticky header in pixels
 * @property {number} [scrollShadowHeightPx] - height of top and bottom scroll shadows in pixels
 * @property {number} [scrollCoverHeightPx] - height of top and bottom scroll cover areas in pixels
 */
type ScrollboxConfiguration = {
  stickyHeaderHeightPx?: number;
  scrollShadowHeightPx?: number;
  scrollCoverHeightPx?: number;
};

/**
 * Creates a CSS mixin that can be used to style a scrollbox to have nice scroll shadows.
 *
 * The mixin will create a scroll shadow by layering 4 backgrounds on top of each other.
 * The first 2 backgrounds are used to cover up the scroll shadow, and the last 2
 *
 * backgrounds are the actual shadows.
 * @example
 * const scrollboxMixin = makeScrollboxMixin({
 *     stickyHeaderHeightPx: 40,
 *     scrollShadowHeightPx: 14,
 *     scrollCoverHeightPx: 40,
 * });
 *
 * const Scrollbox = styled.div`
 *     ${scrollboxMixin};
 * `;
 *
 * @param {ScrollboxConfiguration} config - configuration for the scrollbox mixin
 * @returns {ReturnType<typeof css>} - a CSS mixin that can be used to style a scrollbox
 */
export const makeScrollboxMixin = ({
  stickyHeaderHeightPx = 0,
  scrollShadowHeightPx = 14,
  scrollCoverHeightPx = 40,
}: ScrollboxConfiguration): ReturnType<typeof css> => css`
  overflow-y: auto;
  background:
    /* Shadow covers */
    linear-gradient(white 30%, rgba(255, 255, 255, 0)),
    linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%,
    /* Shadows */ radial-gradient(50% 0, farthest-side, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)),
    radial-gradient(50% 100%, farthest-side, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)) 0 100%;
  background:
    /* Shadow covers */
    linear-gradient(white 30%, rgba(255, 255, 255, 0)),
    linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%,
    /* Shadows */ radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)),
    radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)) 0 100%;
  background-repeat: no-repeat;
  background-color: white;
  background-size:
    100% ${scrollCoverHeightPx}px,
    100% ${scrollCoverHeightPx}px,
    100% ${scrollShadowHeightPx}px,
    100% ${scrollShadowHeightPx}px;

  /* Opera doesn't support this in the shorthand */
  background-attachment: local, local, scroll, scroll;

  ${stickyHeaderHeightPx > 0
    ? css`
        background-position-y: ${stickyHeaderHeightPx}px, bottom, ${stickyHeaderHeightPx}px, bottom;
      `
    : undefined}
`;
