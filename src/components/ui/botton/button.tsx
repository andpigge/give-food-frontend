import React, { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames/bind';
import Basket from './basket.svg';
import Reload from './reload.svg';

import styles from './button.module.css';

const cx = cn.bind(styles);

interface IButton extends ButtonHTMLAttributes <HTMLButtonElement> {
	type: 'submit' | 'reset' | 'button'
	appearance: 'primary' | 'green' | 'ghost'
	size: 's' | 'm' | 'l'
	icon?: 'reload' | 'basket'
	disabled?: true
}

export const Button: FC<IButton> = (props):JSX.Element => {
	const {
		children,
		type, 
		appearance,
		size,
		icon,
		disabled,
		className,
		...buttonProps
	} = props;

	const classes = cx('button', appearance, size, className);

	return (
		<button
			type={type}
			className={classes}
			disabled={disabled}
			{...buttonProps}
		>
			{/* {icon && 
			<span className={cx('icon', {
				'reload': icon === 'reload',
				'basket': icon === 'basket',
			})}>
				{ icon === 'reload' ? <Reload/> : <Basket/> }
			</span>} */}
			{children}
		</button>
	);
};
