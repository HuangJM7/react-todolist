import { createBrowserHistory } from 'history'


const ENV = process.env.NODE_ENV;//环境模式
let publicUrl: string = '';

//根据环境确定路径
if (ENV === 'development') {
    publicUrl = '/';
} else if (ENV === 'production') {
    publicUrl = '/react-todolist/build';
}

//前端路由
const history = createBrowserHistory({
    basename: publicUrl//配置基链接
});

export default history;


