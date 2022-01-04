import { FC } from 'react';
import cn from 'classnames/bind';

import styles from './title.module.css';

const cx = cn.bind(styles);

import { Button } from '../ui/botton';

export const Title: FC = (): JSX.Element => {
	return (
		<div className={cx('container')}>
			<h1 className={cx('title')}>
				Hello world
			</h1>
			<Button type='button' appearance='primary' size='l' disabled>
				Помочь проекту
			</Button>
			<Button type='submit' appearance='ghost' size='m'>
				Отправить снова
			</Button>
			<Button type='button' appearance='green' size='s'>
				+
			</Button>
		</div>
	);
};
