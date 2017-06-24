import Mock from 'mockjs';
var a= Mock.mock('http://g.cn', {
    'name'     : '@name',
    'age|1-100': 100,
    'color'    : '@color'

    
});
