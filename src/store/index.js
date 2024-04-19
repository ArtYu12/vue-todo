import {createStore} from "vuex"
import { postModule } from "./postModule"

export default createStore({
    state() {
        return {
            isAuth: true
        }
    },
    modules:{
        posts: postModule
    }
})