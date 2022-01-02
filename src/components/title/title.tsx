import { FC } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import styles from './title.module.css';

const cx = cn.bind(styles);

export const Title: FC = (): JSX.Element => {
	return (
		<div className={cn(styles.container)}>
			<h1 className={cn(styles.title)}>
				Hello world
			</h1>
		</div>
	);
};
