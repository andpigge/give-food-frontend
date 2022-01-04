import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
import cn from 'classnames/bind';

import styles from './button.module.css';

const cx = cn.bind(styles);

interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode;
	type: 'submit' | 'reset' | 'button'
	appearance: 'primary' | 'green' | 'ghost'
	size: 's' | 'm' | 'l'
	icon?: true
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
			{children}
		</button>
	);
};
