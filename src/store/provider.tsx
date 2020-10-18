import React, {createContext, useState, ReactNode} from 'react';
import PropTypes from 'prop-types';
import {IContext} from 'store';
import {init} from 'store/store';

export const Store = createContext<IContext>({store: init, setStore: () => {}});

interface IProps {children: ReactNode;}

export const StoreProvider = ({children}: IProps) => {
	const [store, setStore] = useState(init);

	return (
		<Store.Provider value={{store, setStore}}>
			{children}
		</Store.Provider>
	);
};

StoreProvider.propTypes = {
	children: PropTypes.node.isRequired,
}
