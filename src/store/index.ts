import {Dispatch} from 'react';
import {IStore} from 'store/store';

export {Store} from 'store/provider';
export {StoreProvider} from 'store/provider';

export interface IContext {
	store: IStore;
	setStore: Dispatch<React.SetStateAction<IStore>>;
}
