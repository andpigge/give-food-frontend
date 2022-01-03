import { FC } from 'react';
import cn from 'classnames/bind';

import styles from './title.module.css';

const cx = cn.bind(styles);

export const Title: FC = (): JSX.Element => {
	return (
		<div className={cx('container')}>
			<h1 className={cx('title')}>
				Hello world
			</h1>
		</div>
	);
};
