import {
  COLUMNS,
  SIZES,
  VIEWPORTS,
  FLEX_OPTIONS,
  CONTAINER_SIZES,
  MISC_STYLES,
  DEFAULT_COLUMN_STYLES,
} from './constants';

/**
 * Reduces an array of objects into a single object
 * @param  {Object} m object thus far
 * @param  {Object} o the next object in the array
 * @return {Object}
 */
export const reduceStyles = (m, o) => ({ ...m, ...(o.default || o) });

/**
 * Creates the media port key for our object
 * @param  {String} size  the size to create the media port for
 * @return {String}
 */
export const getMediaPortKey = size => (
  // create our media key, but because xs doesnt have a media query we will use `default`
  // we will later move everything from default into the main scope of the object
  size !== 'xs' ? `@media only screen and (min-width: ${VIEWPORTS[size]})` : 'default'
);

/**
 * Will either return the original object or wrap the original object in the media key
 * @param  {String} mediaKey the media key
 * @param  {Object} obj      the original object
 * @return {Object}
 */
export const wrapMedia = (mediaKey, obj) => (
  mediaKey === 'default' ? obj : { [mediaKey]: obj }
);

/**
 * Creates misc data for columns depending on if they are 0 index or not
 * @param  {Number} col   the column number
 * @param  {String} width the percent width
 * @return {Object}
 */
export const columnExtras = (col, width) => (
  col ? {
    flexBasis: width,
    maxWidth: width,
  } : {
    flexGrow: 1,
    flexBasis: 0,
    maxWidth: '100%',
  }
);

/**
 * Creates a regular column for a particular size
 * @param  {String} size  the size to create the column for
 * @param  {Number} col   the column number we are creating this for
 * @return {Object}
 */
export const createColumn = (size, col, mediaKey) => (
  {
    [col ? `col-${size}-${col}` : `col-${size}`]: wrapMedia(mediaKey, {
      ...DEFAULT_COLUMN_STYLES,
      ...columnExtras(col, `${(col / 12) * 100}%`),
    }),
  }
);

/**
 * Creates an offset column
 * @param  {String} size  the size to create the column for
 * @param  {Number} col   the column number we are creating this for
 * @return {Object}
 */
export const createOffsetColumn = (size, col, mediaKey) => (
  {
    [`col-${size}-offset-${col}`]: wrapMedia(mediaKey, {
      marginLeft: `${(col / 12) * 100}%`,
      ...DEFAULT_COLUMN_STYLES,
    }),
  }
);

/**
 * Creates the position columns i.e. start, end, etc. for a particular size
 * @param  {String} size  the size to create the columns for
 * @return {Object}
 */
export const createPositionColumns = (size, mediaKey) => (
  Object.keys(FLEX_OPTIONS).map(key => (
    {
      [`${key}-${size}`]: wrapMedia(mediaKey, FLEX_OPTIONS[key]),
    }
  )).reduce(reduceStyles, {})
);

/**
 * Creates a container style element for a particular size
 * @param  {String} size  the size to create the container for
 * @return {Object}
 */
export const createContainer = (size, mediaKey) => (
  {
    container: wrapMedia(mediaKey, {
      width: CONTAINER_SIZES[size],
      marginRight: 'auto',
      marginLeft: 'auto',
    }),
  }
);

/**
 * Creates a set of columns by size nested by the corresponding viewport
 * @param  {String} size  the size to create the columns for
 * @return {Object}
 */
export const createFlexColumns = (size) => {
  const mediaKey = getMediaPortKey(size);
  return COLUMNS.map((o, col) => (
    {
      ...createColumn(size, col, mediaKey),
      ...createOffsetColumn(size, col, mediaKey),
      ...createPositionColumns(size, mediaKey),
    }
  )).reduce(reduceStyles, createContainer(size, mediaKey));
};

export default () => SIZES.map(size => createFlexColumns(size)).reduce(reduceStyles, MISC_STYLES);
