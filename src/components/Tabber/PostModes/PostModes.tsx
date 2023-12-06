﻿import classNames from 'classnames';

import scss from '~components/Tabber/PostModes/PostModes.module.scss';

import { IPostModesProps } from './PostModes.types';

function PostModes(props: IPostModesProps) {
  const RenderPostModes = () =>
    props.postModes.map((postMode, index) => (
      <span
        key={index}
        className={classNames(
          scss.postModeTitle,
          props.currentPostMode === index && scss.active
        )}
        onClick={() => props.handleCurrentPostMode(index)}
      >
        {postMode.name}
      </span>
    ));

  return <div className={scss.postModesHeader}>{RenderPostModes()}</div>;
}

export default PostModes;
