import {combineReducers} from 'redux'
import userReducer from './user/user-reducer'
import cartReducer from './cart/cart-reducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import dirctoryReducer from './directory/directory-reducer'
import shopReducer from './shop/shop-reducer'


const persistConfig={
    key:'root',
    storage,
    whitelist:['cart']
}
const rootReducer=combineReducers({

    directory:dirctoryReducer,
    user:userReducer,
    cart:cartReducer,
    shop:shopReducer
    
})

export default persistReducer(persistConfig,rootReducer)
//default export can be given any import name