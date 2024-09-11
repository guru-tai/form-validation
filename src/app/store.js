import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import loginSlice from '../features/loginSlice';
import authSaga from '../features/sagas';
import drivesSlice from '../drives/drivesSlice';

const sagaMiddleware=createSagaMiddleware();
export const store=configureStore({
    reducer:{
        validate:loginSlice,
        drives:drivesSlice
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(authSaga)